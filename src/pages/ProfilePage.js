import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">


      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-1/4 pr-6">
            <nav className="bg-white rounded-lg shadow p-4">
              <ul>
                <li className="mb-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">Account Main</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">New Orders</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">Orders History</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">My Wishlist</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">Transactions</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">Profile Setting</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded">Log Out</a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Section */}
          <section className="w-3/4">
            {/* User Information */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h2 className="text-xl font-bold">Mr. Jackson Mike</h2>
                  <p className="text-gray-600">
                    Email: myusername@gmail.com, Phone: +1234567890988
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-100 p-4 rounded mr-4">
                  United States, 3601 Old Capitol Trail, Unit A-7, Suite
                </div>
                <div className="flex-1 bg-gray-100 p-4 rounded">
                  Moscow city, Street name, Building lenin, House 77
                </div>
              </div>
            </div>

            {/* Orders */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4">Your Orders</h3>
              {/* Order Item */}
              <div className="border border-gray-200 rounded p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <h4 className="font-bold">Order ID: 8924 Shipped</h4>
                    <p className="text-gray-600">Date: 16 December 2022</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-red-500 text-white rounded">Cancel Order</button>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded">Track Order</button>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-1 pr-4">
                    <h5 className="font-bold">Contact</h5>
                    <p>Mike Johnatan</p>
                    <p>Phone: 371-295-9131</p>
                    <p>Email: info@mywebsite.com</p>
                  </div>
                  <div className="flex-1 pr-4">
                    <h5 className="font-bold">Shipping Address</h5>
                    <p>United States</p>
                    <p>3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington, DE 19808</p>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold">Payment</h5>
                    <p>Visa **** 4216</p>
                    <p>Shipping fee: $56</p>
                    <p>Total paid: $456</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="flex-1">
                    <p>T-shirts with multiple colors 2x = $25.98</p>
                  </div>
                  <div className="flex-1">
                    <p>Gaming Headset 32db Black 2x = $339.90</p>
                  </div>
                  <div className="flex-1">
                    <p>Apple Watch Series 4 Space Gray 2x = $339.90</p>
                  </div>
                </div>
              </div>
              {/* Additional orders can be added similarly */}
            </div>
          </section>
        </div>
      </main>

      
    </div>
  );
};

export default ProfilePage;
