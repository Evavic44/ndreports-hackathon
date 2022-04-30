import Head from 'next/head'



import {
    Icon,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Select,
    FormHelperText,
    Flex,
    Box,
    Heading,
    Button,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { useRef } from 'react'

import { useForm } from 'react-hook-form';
export default function Report() {
    const inputRef = useRef();
	const {
		handleSubmit,
		register,
		setError,
		control,
		formState: { errors, isSubmitting },
	} = useForm()



    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Submit a report on an environmental challenge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main>
                {/* Address, Media */}
                <Flex width="full" justifyContent="center">
                    <Box p={2}>
                        <Box textAlign="center">
                            <Heading>Submit your report</Heading>
                        </Box>
                        <Box my={3} textAlign="left">
                            <form>
                                <FormControl>
                                    <FormLabel htmlFor='name'>Name</FormLabel>
                                    <Input id='name' type='name' placeholder='John Doe' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='email'>Email address</FormLabel>
                                    <Input id='email' type='email' placeholder='johndoe@example.com' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='state'>State</FormLabel>
                                    <Select id='state' placeholder='Select state'>
                                        <option>Rivers</option>
                                        <option>Delta</option>
                                        <option>Abia</option>
                                    </Select>
                                </FormControl>
                                {/* <CloudinaryUploadWidget /> */}
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </main>
        </div>
    )
}
