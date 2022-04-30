import Head from 'next/head'
import styles from '../styles/Home.module.css'



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

            <nav className={styles.navbar}>
      <a href="/"><img src={"/images/logo.svg"} width="100px" /></a>
      </nav>

            <main>
                {/* Address, Media */}
                <Flex width="full" justifyContent="center">
                    <Box p={2}>
                        <Box textAlign="center">
                            <Heading>Submit your report</Heading>
                        </Box>
                        <Box my={3} textAlign="left">
                            <form>
                                <FormControl mb={3}>
                                    <FormLabel htmlFor='name'>Name</FormLabel>
                                    <Input id='name' type='name' placeholder='John Doe' />
                                </FormControl>
                                <FormControl mb={3}>
                                    <FormLabel htmlFor='email'>Email address</FormLabel>
                                    <Input id='email' type='email' placeholder='johndoe@example.com' />
                                </FormControl>
                                <FormControl mb={3}>
                                    <FormLabel htmlFor='state'>State</FormLabel>
                                    <Select id='state' placeholder='Select state'>
                                        <option>Rivers</option>
                                        <option>Delta</option>
                                        <option>Abia</option>
                                        <option>Cross River</option>
                                        <option>Edo</option>
                                        <option>Delta</option>
                                        <option>Imo</option>
                                        <option>Bayelsa</option>
                                        <option>Akwa-Ibom</option>
                                        <option>Ondo State</option>
                                    </Select>
                                </FormControl>
                                <FormControl mb={3}>
                                    <FormLabel htmlFor='state'>Environmental Challenge</FormLabel>
                                    <Select id='state' placeholder='Select Challenge'>
                                        <option>Bunkery/Oil Spillage</option>
                                        <option>Air Pollution</option>
                                        <option>Soil Degradation</option>
                                        <option>Militant and Avengeers Movement</option>
                                        <option>Natural Resource Depletion</option>
                                        <option>Generating Unstable Waste</option>
                                        <option>Waste Pollution</option>
                                    </Select>
                                </FormControl>
                                <FormControl mb={3}>
                                    <FormLabel htmlFor='name'>Media Upload</FormLabel>
                                    <Input id='file' type='file' placeholder='Upload media file' />
                                </FormControl>
                                <FormControl mb={3}>
                                    <FormLabel htmlFor='name'>Other</FormLabel>
                                    <Input id='name' type='name' placeholder='If other please specify' />
                                </FormControl>
                                {/* <CloudinaryUploadWidget /> */}

                                <button className={styles.btn} textAlign="center" type="submit">Submit</button>
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </main>
        </div>
    )
}
