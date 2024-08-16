import { useState } from 'react';

const CheckoutPage = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white">
         
            <main>
                <div className="container mx-auto px-6 py-10">
                    <h1 className="text-3xl font-semibold text-gray-700">Checkout</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-xl font-medium text-gray-800">Billing Information</h2>
                            <form className="mt-4">
                                <div className="flex flex-col space-y-4">
                                    <input className="border border-gray-300 p-2 rounded-md" type="text" placeholder="Full Name" />
                                    <input className="border border-gray-300 p-2 rounded-md" type="email" placeholder="Email Address" />
                                    <input className="border border-gray-300 p-2 rounded-md" type="text" placeholder="Phone Number" />
                                    <input className="border border-gray-300 p-2 rounded-md" type="text" placeholder="Shipping Address" />
                                </div>
                                <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">Continue to Payment</button>
                            </form>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-xl font-medium text-gray-800">Order Summary</h2>
                            <div className="mt-4">
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">Item 1</span>
                                    <span className="text-gray-600">$50.00</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">Item 2</span>
                                    <span className="text-gray-600">$30.00</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">Item 3</span>
                                    <span className="text-gray-600">$20.00</span>
                                </div>
                                <div className="flex justify-between py-2 border-t font-semibold text-gray-800">
                                    <span>Total</span>
                                    <span>$100.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckoutPage;
