import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HalamanRegister from "../../../pages/auth/register";
import { useRouter } from "next/router";

// mock next router
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

// mock global fetch
global.fetch = jest.fn();

describe("register page", () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue({
            push: mockPush,
        });
    });

    it("handles successful registration", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            status: 200,
        });

        render(<HalamanRegister />);

        fireEvent.change(screen.getByPlaceholderText("Email"), {
            target: { value: "test@test.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("Fullname"), {
            target: { value: "test user" },
        });
        fireEvent.change(screen.getByPlaceholderText("Password"), {
            target: { value: "password123" },
        });

        fireEvent.click(screen.getByRole("button", { name: "Register" }));

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith("/api/register", expect.any(Object));
            expect(mockPush).toHaveBeenCalledWith("/auth/login");
        });
    });

    it("shows error when email exists", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            status: 400,
        });

        render(<HalamanRegister />);

        fireEvent.click(screen.getByRole("button", { name: "Register" }));

        await waitFor(() => {
            expect(screen.getByText("Email already exists")).toBeInTheDocument();
        });
    });

    it("shows general error on failed registration", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            status: 500,
        });

        render(<HalamanRegister />);

        fireEvent.click(screen.getByRole("button", { name: "Register" }));

        await waitFor(() => {
            expect(screen.getByText("An error occurred")).toBeInTheDocument();
        });
    });
});