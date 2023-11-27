import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { setupServer } from 'msw/node'
import { http, HttpResponse } from "msw"
import App from "./App"

const server = setupServer(
    http.get('http://www.shui.foo/*', () => {
        return HttpResponse.json({
            Search: [
                {
                    "Date": "2023-01-05",
                    "Msg": "Hej, vi ses vid bowlinghallen kl 20!",
                    "Username": "Lill-Janne"
                },
                {
                    "Date": "2023-01-05",
                    "Msg": "Ok, jag kommer lite sent!",
                    "Username": "Stor-Svenne"
                },
                {
                    "Date": "2023-01-06",
                    "Msg": "Sorry, jag kunde inte komma, min katt blev sjuk",
                    "Username": "Janna"
                },
                {
                    "Date": "2023-01-06",
                    "Msg": "True story",
                    "Username": "Jannas katt"
                }
            ]
        })
    })
)


beforeAll(() => {
    server.listen()
})
afterAll(() => server.close())


describe('App', () => {


    it('should render 4 msgItem-components', async () => {
        render(<App />)

        await waitFor(() => {
            expect(screen.queryByText('Du har inga meddelanden att visa')).not.toBeInTheDocument()
        })

        const msgItems = screen.getAllByRole('msg-item')

        expect(msgItems).toHaveLength(4)
        
    })

    it('should render 1 button', async () => {
        render(<App />)

        const buttonElements = screen.getAllByRole('button')

        expect(buttonElements).toHaveLength(1)
        
    })

})