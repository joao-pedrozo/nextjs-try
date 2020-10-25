import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const AddToCartModal = dynamic(
    () => import('../../../components/AddToCartModal'), // Primeiro parâmetro é o componente que vamos importar (lazy load)
    { loading: () => <p> Loading... </p> } // options
);

export default function Product(){
    const router = useRouter();
    const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

    function handleAddToCart(){
        setIsAddToCartModalVisible(true);
    }

    return (
        <div>
            <h1>{router.query.slug}</h1>

            <button onClick={handleAddToCart}>Add to cart</button>

            { isAddToCartModalVisible && <AddToCartModal />}
        </div>
    )
}