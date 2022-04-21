import {msgProps} from "../functions/form";

const postmark = require('postmark')

export const processEmails = async (data: msgProps) => {
    const client = new postmark.ServerClient(process.env.POSTMARK_API)

    // Send message to admin
    const adminResult = await client.sendEmailWithTemplate({
        TemplateId: 26242231,
        TemplateModel: data,
        From: process.env.POSTMARK_FROM,
        To: process.env.POSTMARK_ADMIN,
    })

    // Send message to client
    await client.sendEmailWithTemplate({
        TemplateId: 26243405,
        TemplateModel: data,
        From: process.env.POSTMARK_FROM,
        To: data.email,
        MessageStream: 'outbound',
    })

    if (adminResult.ErrorCode === 0) {
        return {
            statusCode: 200,
            body: 'success'
        }
    } else {
        return {
            statusCode: 400,
            body: 'error'
        }
    }
}