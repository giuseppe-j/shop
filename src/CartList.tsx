type Props = {
    toggleCart: () => void
}
function CartList(props: Props) {
    return (
        <div className="fixed inset-0 overflow-hidden z-20">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity opacity-100"></div>
                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                    <div className="w-screen max-w-md translate-x-0">
                        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                                    <div className="ml-3 h-7 flex items-center">
                                        <button type="button" onClick={props.toggleCart}
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"><span className="sr-only">Close
                                                panel</span><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul className="-my-6 divide-y divide-gray-200">
                                            <li className="py-6 flex">
                                                <div
                                                    className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                </div>
                                                <div className="ml-4 flex-1 flex flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3><a href="/products/balloon-chair/">Balloon
                                                                Chair</a></h3>
                                                            <div>
                                                                <div className="ml-4">$156.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 flex items-center text-sm">
                                                        <form><label className="mr-2" html-for="quantity-35">Quantity</label><select
                                                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                                            id="quantity-35" name="quantity-35">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                        </select></form>
                                                        <div className="flex-1"></div>
                                                        <div className="flex"><button
                                                            className="font-medium text-primary-600 hover:text-primary-500"
                                                            value="35">Remove</button></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>
                                        <div>$156.00</div>
                                    </p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping will be calculated at checkout.</p>
                                <div className="mt-6">
                                    <a href="/checkout/" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 w-full"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartList;