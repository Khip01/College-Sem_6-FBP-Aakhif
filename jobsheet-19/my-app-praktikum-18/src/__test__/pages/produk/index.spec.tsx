import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import Produk from "../../../pages/produk"
import useSWR from "swr"

// mock swr module
jest.mock("swr")

// mock next image
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        return <img {...props} />
    }
}))

describe("product page", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("renders skeleton or empty state when loading", () => {
        // mock loading state
        (useSWR as jest.Mock).mockReturnValue({
            data: null,
            error: null,
            isLoading: true
        })

        render(<Produk/>)

        expect(screen.getByText("Daftar Produk")).toBeInTheDocument()
        expect(screen.queryByText(/Nama /)).not.toBeInTheDocument()
    })

    it("renders product list when data is fetched", () => {
        (useSWR as jest.Mock).mockReturnValue({
            // wrap array inside data object because component uses data?.data
            data: {
                data: [
                    {
                        id: "p1",
                        name: "Sepatu Lite Racer 3.0",
                        price: 400000,
                        image: "https://assets.adidas.com/images/742e925a598c4f329e1d0e97b8bdb791_9366/Sepatu_Lite_Racer_3.0_Abu-abu_IG3604_02_standard_hover.jpg",
                        category: "Sportswear"
                    },
                    {
                        id: "p2",
                        name: "Sepatu Running Galaxy 7",
                        price: 425000,
                        image: "https://assets.adidas.com/images/40b38674961c4f6fb36f44263b75bc93_9366/Sepatu_Running_Galaxy_7_Biru_ID8752_02_standard_hover.jpg",
                        category: "Lari"
                    },
                    {
                        id: "p3",
                        name: "Sepatu Response Runner",
                        price: 425000,
                        image: "https://assets.adidas.com/images/1ab06b75e63b452ebc529ff54a90c71b_9366/Sepatu_Response_Runner_Merah_IH6108_02_standard_hover_hover_hover.jpg",
                        category: "Lari"
                    }
                ]
            },
            error: null,
            isLoading: false
        })

        render(<Produk/>)

        expect(screen.getByText("Nama : Sepatu Lite Racer 3.0")).toBeInTheDocument()
        expect(screen.getByText("Kategori : Sportswear")).toBeInTheDocument()
        expect(screen.getByText("Harga : Rp. 400.000")).toBeInTheDocument()

        const img = screen.getByAltText("Sepatu Lite Racer 3.0")
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute("src", "https://assets.adidas.com/images/742e925a598c4f329e1d0e97b8bdb791_9366/Sepatu_Lite_Racer_3.0_Abu-abu_IG3604_02_standard_hover.jpg")

        // use get all because there are 3 links now, check the first one
        const links = screen.getAllByRole("link")
        expect(links[0]).toHaveAttribute("href", "/produk/p1")
    })
})