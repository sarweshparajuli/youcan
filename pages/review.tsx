import NavBar from "@components/Navbar";
import Footer from "@components/Footer";
import Head from 'next/head';
import { ThemeProvider } from "@mui/system";
import theme from "@styles/themes";
import Heading from "@components/review/Heading"
import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import Router from 'next/router'

import {
    Box,
  } from "@mui/material";

export type InnerList = {
    salary: string,
    workload: string,
    reliability: number,
}

export type ItemObject = {
    companyName: string,
    companyOffer: string,
    overallRating: number,
    reviewNumber: number,
    listItems: InnerList,
    offerText: string,
    btnLink: boolean,
}

export type PageObject = {
    title: string,
    text: string,
    items: ItemObject[],
}


function Review() {
    const router = useRouter()
    const {title} = router.query // <-- passed data is in here
    const propNull : PageObject = {
        title: 'Top Jobs',
        text: 'Find the top jobs here!',
        items: [
            {
                companyName: 'Novartis',
                companyOffer: 'Best Chemist Jobs',
                overallRating: 4.0,
                reviewNumber: 120,
                listItems: {
                    salary: '$5000/month',
                    workload: '8 hrs',
                    reliability: 4.0,
                },
                offerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor suspendisse sed dolor diam velit tristique. Varius id neque netus ultrices. Dolor in urna lectus justo. Nec, vel non purus scelerisque eget ut viverra augue.',
                btnLink: true

            },{
                companyName: 'Binod Tech',
                companyOffer: 'Best Frontend Jobs',
                overallRating: 4.0,
                reviewNumber: 120,
                listItems: {
                    salary: '$5000/month',
                    workload: '6 hrs',
                    reliability: 4.0,
                },
                offerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor suspendisse sed dolor diam velit tristique. Varius id neque netus ultrices. Dolor in urna lectus justo. Nec, vel non purus scelerisque eget ut viverra augue.',
                btnLink: true
    }]
    };
    const propStuff : PageObject[] = [
        {
            title: 'Best Chemist Jobs',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor suspendisse sed dolor diam velit tristique. Varius id neque netus ultrices. Dolor in urna lectus justo. Nec, vel non purus scelerisque eget ut viverra augue.',
            // Place to add stuff for internet e.g images, data to be displayed, apis to be fetched from.
            items: [
                {
                    companyName: 'Novartis',
                    companyOffer: 'Senior Chemist',
                    overallRating: 4.0,
                    reviewNumber: 120,
                    listItems: {
                        salary: '$5000/month',
                        workload: '8 hrs',
                        reliability: 4.0,
                    },
                    offerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor suspendisse sed dolor diam velit tristique. Varius id neque netus ultrices. Dolor in urna lectus justo. Nec, vel non purus scelerisque eget ut viverra augue.',
                    btnLink: false,
                },{
                    companyName: 'Novartis',
                    companyOffer: 'Senior Chemist',
                    overallRating: 4.0,
                    reviewNumber: 120,
                    listItems: {
                        salary: '$5000/month',
                        workload: '8 hrs',
                        reliability: 4.0,
                    },
                    offerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor suspendisse sed dolor diam velit tristique. Varius id neque netus ultrices. Dolor in urna lectus justo. Nec, vel non purus scelerisque eget ut viverra augue.',
                    btnLink: false,
                },
            ]
        },
        {
            title: 'Best Frontend Jobs',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor suspendisse sed dolor diam velit tristique. Varius id neque netus ultrices. Dolor in urna lectus justo. Nec, vel non purus scelerisque eget ut viverra augue.',
            // Place to add stuff for refridgerators
            items: [{
                companyName: 'Binod Tech',
                companyOffer: 'Junior Frontend Engineer',
                overallRating: 4.0,
                reviewNumber: 120,
                listItems: {
                    salary: '$5000/month',
                    workload: '6 hrs',
                    reliability: 4.0,
                },
                offerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor suspendisse sed dolor diam velit tristique. Varius id neque netus ultrices. Dolor in urna lectus justo. Nec, vel non purus scelerisque eget ut viverra augue.',
                btnLink: false
            },
            {
                companyName: 'Binod Tech',
                companyOffer: 'Junior Frontend Engineer',
                overallRating: 4.0,
                reviewNumber: 120,
                listItems: {
                    salary: '$5000/month',
                    workload: '6 hrs',
                    reliability: 4.0,
                },
                offerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor suspendisse sed dolor diam velit tristique. Varius id neque netus ultrices. Dolor in urna lectus justo. Nec, vel non purus scelerisque eget ut viverra augue.',
                btnLink: false
            },]
        },]
    const [propsByTitle] = title ? propStuff.filter(object => object.title === title) : [propNull];
    useEffect(() => {
        if(!propsByTitle){
            Router.push('/404')
        }
    });
     
    return(
        <ThemeProvider theme={theme}>

            <Head>
                <title>YouCan</title>
            </Head>
            <NavBar />
            <Box style={{backgroundColor: "#f5f3f3"}} py="40px">
                <Heading titleObject={propsByTitle} />    
            </Box>
            <Footer />
        </ThemeProvider>
    )


}

export default Review;