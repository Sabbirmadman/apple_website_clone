import React from "react";
import { appleImg } from "../utils";
import { MdKeyboardArrowRight } from "react-icons/md";
function Footer() {
    const data = {
        title: "Shop and Learn",
        list: [
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "TV",
            "Music",
            "Support",
        ],
    };

    return (
        <section>
            <div className="screen-max-width text-[#d2d2d2]">
                <div className="flex items-center pt-4 pb-6 border-t border-gray ">
                    <img src={appleImg} alt="Apple" width={14} height={18} />
                    <MdKeyboardArrowRight />
                    <p className="font-normal text-sm">IPhone</p>
                    <MdKeyboardArrowRight />
                    <p className="font-normal text-sm">IPhone 15</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-8 ">
                    <div className="flex flex-col gap-2">
                        <h3>{data.title}</h3>
                        {data?.list.map((item) => (
                            <p className="text-sm">{item}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>{data.title}</h3>
                        {data?.list.map((item) => (
                            <p className="text-sm">{item}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>{data.title}</h3>
                        {data?.list.map((item) => (
                            <p className="text-sm">{item}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>{data.title}</h3>
                        {data?.list.map((item) => (
                            <p className="text-sm">{item}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>{data.title}</h3>
                        {data?.list.map((item) => (
                            <p className="text-sm">{item}</p>
                        ))}
                    </div>
                </div>
                <div className="text-left">
                    More ways to shop:
                    <a className="underline text-blue" href="#">
                        Find an Apple Store
                    </a>
                    or
                    <a className="underline text-blue" href="#">
                        other retailer
                    </a>
                    near you. Or call 1-800-MY-APPLE.
                </div>
                <div className="relative flex justify-center items-center pt-4 pb-6 border-t border-gray mt-6 text-sm">
                    <p className="absolute left-0 ">
                        Copyright © 2022 Apple Inc. All rights reserved.
                    </p>
                    <div className="flex ml-auto gap-2">
                        <p class="footer-link">Privacy Policy</p>
                        <p class="footer-link">Terms of Use</p>
                        <p class="footer-link">Sales and Refunds</p>
                        <p class="footer-link">Legal</p>
                        <p class="footer-link">Site Map</p>
                    </div>

                    <p className="ml-auto">United States</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
