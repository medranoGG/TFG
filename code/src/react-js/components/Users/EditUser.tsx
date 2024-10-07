"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

interface EditUserProps {
    userId?: string;
}

export default function EditUser({ userId }: EditUserProps) {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        passwd: ""
    });

    const { name, surname, email, phoneNumber, passwd } = user;

    useEffect(() => {
        const fetchUserData = async () => {
            if (userId) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/v1/users/${userId}`);
                    setUser(response.data);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserData();
    }, [userId]);

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/users/${userId}`, user);
        window.location.href = "/";
    };

    return (
        <>
            <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
                    <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
                    <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
                        <Image
                            src="/images/shape/shape-dotted-light.svg"
                            alt="Dotted"
                            className="dark:hidden"
                            fill
                        />
                        <Image
                            src="/images/shape/shape-dotted-dark.svg"
                            alt="Dotted"
                            className="hidden dark:block"
                            fill
                        />
                    </div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
                    >
                        <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                            Edit User Information
                        </h2>

                        <form onSubmit={onSubmit}>
                            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="First name"
                                    value={name}
                                    onChange={onInputChange}
                                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                                />
                                <input
                                    name="surname"
                                    type="text"
                                    placeholder="Last name"
                                    value={surname}
                                    onChange={onInputChange}
                                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                                />
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone number"
                                    value={phoneNumber}
                                    onChange={onInputChange}
                                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                                />
                            </div>

                            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={onInputChange}
                                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                                />
                                <input
                                    name="passwd"
                                    type="password"
                                    placeholder="Password"
                                    value={passwd}
                                    onChange={onInputChange}
                                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                                />
                            </div>

                            <div className="flex flex-wrap gap-10 md:justify-center xl:gap-15">
                                <button
                                    aria-label="update user information"
                                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                                >
                                    Update User
                                </button>
                            </div>

                            <div className="mt-12.5 border-t border-stroke py-5 text-center dark:border-strokedark">
                                <p>
                                    <Link
                                        className="text-black hover:text-primary dark:text-white dark:hover:text-primary"
                                        href="/"
                                    >
                                        Cancel
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
