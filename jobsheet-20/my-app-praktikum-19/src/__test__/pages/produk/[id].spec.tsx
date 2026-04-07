import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import HalamanProduk, { getStaticProps, getStaticPaths } from "../../../pages/produk/[id]"

// simpan fungsi fetch asli
const originalFetch = global.fetch;

describe("product detail page", () => {
    // clear mock setelah selesai
    afterAll(() => {
        global.fetch = originalFetch;
    });

    it("renders product detail correctly", () => {
        const mockProduct = {
            id: "p1",
            name: "sepatu lari mantap",
            price: 500000,
            image: "https://example.com/sepatu.jpg",
            category: "lari"
        }

        render(<HalamanProduk product={mockProduct} />)

        expect(screen.getByText("Detail Produk")).toBeInTheDocument()
        expect(screen.getByText("sepatu lari mantap")).toBeInTheDocument()
        expect(screen.getByText("lari")).toBeInTheDocument()
        expect(screen.getByText("Rp. 500.000")).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Add to Cart" })).toBeInTheDocument()

        const img = screen.getByAltText("sepatu lari mantap")
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute("src", "https://example.com/sepatu.jpg")
    })

    it("getStaticPaths returns correct paths", async () => {
        // mock fetch return 2 data produk
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                data: [{ id: 1 }, { id: 2 }]
            })
        });

        const response = await getStaticPaths();

        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/api/produk");
        expect(response.fallback).toBe(false);
        expect(response.paths).toEqual([
            { params: { id: "1" } },
            { params: { id: "2" } }
        ]);
    })

    it("getStaticProps returns product props", async () => {
        // mock fetch return detail 1 produk
        const mockData = { id: 1, name: "sepatu" };

        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                data: mockData
            })
        });

        const response = await getStaticProps({ params: { id: "1" } });

        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/api/produk/1");
        expect(response).toEqual({
            props: {
                product: mockData
            }
        });
    })
})