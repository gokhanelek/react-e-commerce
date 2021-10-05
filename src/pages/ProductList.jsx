import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`

`;

const Title = styled.h1``;
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Filter = styled.div`
    margin:20px;
`;

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;

const Select = styled.select`
    padding:10px;
    margin-right:20px;
`;

const Option = styled.option`
`;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter</FilterText>
                    <Select name="color">
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" >
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter><FilterText>Sort Products:</FilterText></Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
