import { onErrorCaptured } from "vue"

export default function ErrorHandler(props) {
    onErrorCaptured((err, vm, info) => {
        console.log("Error From ErrorHandler")
        // console.log(err, vm, info)
        return false
    })
    return {}
}
