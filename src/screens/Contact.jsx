import React, { useEffect, useState } from 'react'
import drops from '../assets/images/drops-contact.png'
import { LuFacebook, LuInstagram, LuGithub, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { useForm } from '@formspree/react';
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'
import toast from 'react-hot-toast';

const Contact = () => {
  return (
    <section className='bg-[url(./contact-bg.png)] flex justify-between bg-no-repeat bg-cover bg-center w-full h-full relative overflow-hidden pt-32 px-16'>
        <LetsConnect />
        <ContactForm />

        <img
            src={drops}
            className='absolute bottom-0 right-0'
            alt=''
        />
    </section>
  )
}

const LetsConnect = () => {
    return (
        <div className='flex flex-col justify-end h-full w-fit gap-6 font-[tusker-grotesk] text-[300px] uppercase text-secondary leading-none'>
            <div className='flex items-start gap-2'>
                <span>Let's</span>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-4'>
                        <hr className='w-12 border-2 border-secondary' />
                        <a href='https://www.facebook.com/alin.alex.peter' target='_blank'>
                            <LuFacebook size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                        <hr className='w-12 border-2 border-secondary' />
                        <a href='https://x.com/GoKoding' target='_blank'>
                            <FaXTwitter size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                        <hr className='w-12 border-2 border-secondary' />
                        <a href='https://www.instagram.com/peter_aa20' target='_blank'>
                            <LuInstagram size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <hr className='w-27 border-2 border-secondary' />
                        <a href='https://github.com/AlinAlexandruPeter' target='_blank'>
                            <LuGithub size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                        <hr className='w-12 border-2 border-secondary' />
                        <a href='https://www.linkedin.com/in/alin-alexandru-peter-3b1b93232' target='_blank'>
                            <LuLinkedin size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <hr className='w-6 border-2 border-secondary' />
                        <a href='mailto:peteralexandru00@gmail.com'>
                            <MdOutlineEmail size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                    </div>
                </div>
            </div>
            <span className='ml-8'>Connect</span>
        </div>
    )
}

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [state, handleSubmit] = useForm("xwpwlzqe");
    const [disabled, setDisabled] = useState(true);

    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    useEffect(() => {
        if (state.succeeded) {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            });
            toast.success('Message sent successfully')
        } else {
            formData.email && toast.error('Something went wrong')
        }

    }, [state.succeeded, formData.email])

    useEffect(() => {
        const firstName = formData.firstName.trim();
        const lastName = formData.lastName.trim();
        const email = formData.email.trim();
        const message = formData.message.trim();

        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const valid = firstName && lastName && emailValid && message;

        if (valid) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [formData])

    return (
        <div className='text-secondary w-2/5 mt-6'>
            <div className='flex items-baseline gap-0 font-[plateia] text-6xl uppercase mb-6'>
                <h1 className=''>Email</h1>
                <hr className='w-32 border-4 border-secondary scale-x-110 relative' />
                <h1 className=''>Me</h1>
            </div>
            <form className='flex flex-col text-4xl gap-7' onSubmit={handleSubmit}  >
                <div className='flex items-between w-full gap-12'>
                    <Input
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        className="text-3xl! placeholder:text-secondary/80"
                        value={formData.firstName}
                        onChange={handleFormChange}
                    />
                    <Input
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        className="text-3xl! placeholder:text-secondary/80"
                        value={formData.lastName}
                        onChange={handleFormChange}
                    />
                </div>
                <Input
                    type='email'
                    placeholder='Email'
                    name='email'
                    className="text-3xl! placeholder:text-secondary/80"
                    value={formData.email}
                    onChange={handleFormChange}
                />
                <Textarea
                    placeholder='Message'
                    name='message'
                    className="text-3xl! placeholder:text-secondary/80 resize-none"
                    value={formData.message}
                    onChange={handleFormChange}
                />
                <Button disabled={disabled} className='text-2xl py-8! uppercase text-[#5DECDE] bg-secondary cursor-pointer flex flex-row-reverse items-center gap-2'>
                    <span>{state.submitting ? "Sending..." : "Submit"}</span>
                    {state.submitting && (
                        <Ring2
                            size="25"
                            stroke="5"
                            strokeLength="0.25"
                            bgOpacity="0.5"
                            speed="0.8"
                            color="#5DECDE" 
                        />
                    )}
                </Button>
            </form>
        </div>
    )
}

export default Contact