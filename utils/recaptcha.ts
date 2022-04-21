import axios from "axios";

export const checkToken = async (token: string) => {
    const url = `${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`

    try {
        const response = await axios.post(url)
        return response.data.success
    } catch (error) {
        console.log(error)
        return false
    }
}