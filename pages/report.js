import Head from 'next/head'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText,
} from '@chakra-ui/react'



export default function Report() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Submit a report on an environmental challenge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main>

                <form>
                    <FormControl>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </form>
            </main>
        </div>
    )
}
