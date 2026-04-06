import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import AppShell from "../../../components/layouts/Appshell"
import { useRouter } from "next/router"

// mock next font
jest.mock("next/font/google", () => ({
    Roboto: () => ({ className: "mock-roboto" })
}))

// mock next router
jest.mock("next/router", () => ({
    useRouter: jest.fn()
}))

// mock navbar component
jest.mock("../../../components/layouts/navbar", () => {
    return function dummyNavbar() {
        return <div data-testid="navbar">navbar</div>
    }
})

// mock next dynamic for footer
jest.mock("next/dynamic", () => {
    return function dummyDynamic(dynamicImport: any, options: any) {
        // loading executions
        if (typeof dynamicImport === "function") {
            try {
                dynamicImport().catch(() => {})
            } catch (e) {}
        }

        if (options && options.loading) {
            options.loading()
        }

        return function dummyFooter() {
            return <div data-testid="footer">footer</div>
        }
    }
})

describe("appshell component", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("shows navbar and footer on normal route", () => {
        // set path to home
        (useRouter as jest.Mock).mockReturnValue({ pathname: "/" })

        render(
            <AppShell>
                <div data-testid="child">test content</div>
            </AppShell>
        )

        expect(screen.getByTestId("child")).toBeInTheDocument()
        expect(screen.getByTestId("navbar")).toBeInTheDocument()
        expect(screen.getByTestId("footer")).toBeInTheDocument()
    })

    it("hides navbar and footer on auth route", () => {
        // set path to login
        (useRouter as jest.Mock).mockReturnValue({ pathname: "/auth/login" })

        render(
            <AppShell>
                <div data-testid="child">test content</div>
            </AppShell>
        )

        expect(screen.getByTestId("child")).toBeInTheDocument()
        expect(screen.queryByTestId("navbar")).not.toBeInTheDocument()
        expect(screen.queryByTestId("footer")).not.toBeInTheDocument()
    })
})