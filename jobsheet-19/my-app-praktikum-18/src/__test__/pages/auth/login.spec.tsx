import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HalamanLogin from "../../../pages/auth/login";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

jest.mock("next-auth/react", () => ({
    signIn: jest.fn(),
}));

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

describe("login page", () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue({
            push: mockPush,
            query: { callbackUrl: "/" },
        });
    });

    it("handles successful credentials login", async () => {
        (signIn as jest.Mock).mockResolvedValue({ error: null });

        render(<HalamanLogin />);

        // Isi form
        fireEvent.change(screen.getByPlaceholderText("Email"), {
            target: { value: "test@test.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("password"), {
            target: { value: "password123" },
        });

        // Tembak event submit ke form, bukan click ke button
        // ambil elemen terdekat yang punya tag form dari tombol login
        const loginBtn = screen.getByRole("button", { name: "Login" });
        const form = loginBtn.closest("form");

        // Pemicu submit dengan objek target untuk mensimulasikan event.target.email.value
        fireEvent.submit(form!, {
            target: {
                email: { value: "test@test.com" },
                password: { value: "password123" }
            }
        });

        await waitFor(() => {
            expect(signIn).toHaveBeenCalledWith("credentials", expect.objectContaining({
                email: "test@test.com",
                password: "password123"
            }));
            expect(mockPush).toHaveBeenCalledWith("/");
        });
    });

    it("shows error on failed login", async () => {
        (signIn as jest.Mock).mockResolvedValue({ error: "Login failed" });

        render(<HalamanLogin />);

        const loginBtn = screen.getByRole("button", { name: "Login" });
        const form = loginBtn.closest("form");

        // Kasih dummy data biar gak error undefined
        fireEvent.submit(form!, {
            target: {
                email: { value: "a@a.com" },
                password: { value: "123" }
            }
        });

        await waitFor(() => {
            expect(screen.getByText("Login failed")).toBeInTheDocument();
        });
    });

    it("shows catch error message", async () => {
        (signIn as jest.Mock).mockRejectedValue(new Error());

        render(<HalamanLogin />);

        const loginBtn = screen.getByRole("button", { name: "Login" });
        const form = loginBtn.closest("form");

        fireEvent.submit(form!, {
            target: {
                email: { value: "a@a.com" },
                password: { value: "123" }
            }
        });

        await waitFor(() => {
            expect(screen.getByText("wrong email or password")).toBeInTheDocument();
        });
    });

    it("handles google login", () => {
        render(<HalamanLogin />);
        fireEvent.click(screen.getByRole("button", { name: "Sign In with Google" }));
        expect(signIn).toHaveBeenCalledWith("google", expect.objectContaining({ redirect: false }));
    });

    it("handles github login", () => {
        render(<HalamanLogin />);
        fireEvent.click(screen.getByRole("button", { name: "Sign In with Github" }));
        expect(signIn).toHaveBeenCalledWith("github", expect.objectContaining({ redirect: false }));
    });
});