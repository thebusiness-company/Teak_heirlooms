import { useParams } from 'react-router-dom';
import Banner from "./Banner";
import SubCategory from "./SubCategory";
import { useSubCategories } from "../../Hooks/useCategories";


const formatCategoryName = (category) => {
    // Add space before uppercase letters and capitalize the first letter
    return category
        .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize each word
        .trim();
};
const Category = () => {
    const { category } = useParams(); // Gets "Sofas" from the URL
    
    // Fetch subcategories based on the category name from your API
    const { subcategories, isLoading, error } = useSubCategories(category);
    const formattedCategory = formatCategoryName(category);
    if (isLoading) return <div className="text-center py-8">Loading subcategories...</div>;
    if (error) return <div className="text-red-500 text-center py-8">Error loading subcategories: {error.message}</div>;
    
    return (
        <>
            <Banner />
            <SubCategory 
                title={formattedCategory} 
                items={subcategories?.map(sub => ({
                    name: sub.name,
                    image: sub.image || '/default-subcategory.jpg', // Fallback image
                    slug: sub.slug // Include slug for linking
                })) || []} 
            />
        </>
    )
}

export default Category;