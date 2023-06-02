import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
const BreadCrumb = () => {
    return (
        <Breadcrumb mt={3} ml={3}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>MyCampaign</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Products</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default BreadCrumb
