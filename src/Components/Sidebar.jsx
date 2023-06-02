import { Box, Checkbox, Flex, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
    return (
        <Box p={3} w='280px' h="900px" bg='white' ml={3} mt={5} border='1px solid #F7F7F7' borderRadius={'10px'} shadow={'md'}>
            <Text fontWeight={'semibold'} mb={3}>POPULARITY</Text>
            <Flex direction={'column'} gap={3}>
                <Checkbox>Nano (1k-9k)</Checkbox>
                <Checkbox>Micro (100k-999k)</Checkbox>
                <Checkbox>Macro (1M-10M)</Checkbox>
                <Checkbox>Custom</Checkbox>
                <RangeSlider defaultValue={[10, 30]} mt={2}>
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>
            </Flex>
            <Text fontWeight={'semibold'} mb={3} mt={4}>CAMPAIGN REFERENCE</Text>
            <Flex direction={'column'} gap={3} >
                <Checkbox>Barter</Checkbox>
                <Checkbox>Paid</Checkbox>
            </Flex>
            <Text fontWeight={'semibold'} mb={3} mt={4}>PLATFORM</Text>
            <Flex direction={'column'} gap={3} >
                <Checkbox>Youtube</Checkbox>
                <Checkbox>Instagram</Checkbox>
            </Flex>
            <Text fontWeight={'semibold'} mb={3} mt={4}>ENGAGEMENT RATE</Text>
            <RangeSlider defaultValue={[30, 70]} mt={2}>
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
            </RangeSlider>
            <Text fontWeight={'semibold'} mb={3} mt={4}>AVERAGE</Text>
            <RangeSlider defaultValue={[30, 70]} mt={2}>
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
            </RangeSlider>
            <Text fontWeight={'semibold'} mb={2} mt={4}>CATEGORIES</Text>
            <Input variant='flushed' placeholder='Search Category' />
            <Flex direction={'column'} gap={3} mt={3}>
                <Checkbox>Autos & Vehicles</Checkbox>
                <Checkbox>Animation</Checkbox>
                <Checkbox>Agriculture & Allied Sectors</Checkbox>
                <Checkbox>Beauty</Checkbox>
                <Checkbox>Blogs And Travel</Checkbox>
            </Flex>
        </Box>
    )
}

export default Sidebar
