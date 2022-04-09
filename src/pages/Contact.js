import {useLocation} from "react-router-dom"

export default function Contact() {
    const queryString = useLocation().search
    console.log(queryString)

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")

    return (
        <div>
            <h2>Hello {name}, contact us here...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet viverra purus, ac rutrum quam euismod quis.
                 Quisque egestas dolor vel odio venenatis, a commodo nisl mattis. Donec sit amet commodo arcu, at volutpat massa. 
                 Ut at lacus gravida, lacinia quam quis, viverra erat. Maecenas facilisis elit eu tellus faucibus, et fringilla diam pharetra. 
                 Praesent ut sagittis velit. Maecenas tincidunt scelerisque ex quis tincidunt. Vivamus est enim, convallis sed blandit vitae, placerat id leo.
            </p>
        </div>
    )
}