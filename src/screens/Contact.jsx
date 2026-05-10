import React, { useEffect, useState } from 'react'
import drops from '../assets/images/drops-contact.png'
import { 
    LuFacebook, LuInstagram, 
    LuGithub, LuLinkedin 
} from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { useForm } from '@formspree/react';
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'
import toast from 'react-hot-toast';
import { cn } from '../lib/utils';
import { Separator } from "@/components/ui/separator"

const Contact = () => {
  return (
    <section className={cn(
        'bg-[url(/contact-bg.png)] flex justify-between bg-no-repeat bg-cover bg-center w-full h-screen relative overflow-hidden pt-32',
        'lg:pt-16'
    )}>
        <LetsConnect />
        <ContactForm />

        <img
            src={drops}
            className={cn(
                'w-60 absolute bottom-1/2 right-0 -translate-y-1/2 -rotate-90 origin-bottom-right pointer-events-none',
                'lg:bottom-0 lg:right-0'
            )}
            alt=''
        />
    </section>
  )
}

const LetsConnect = () => {
    return (
        <div className={cn(
            'flex flex-col justify-end h-full w-fit px-2 gap-6 font-[tusker-grotesk] text-[200px] uppercase text-secondary leading-none',
            'lg:text-[150px]',
            'xl:text-[220px]',
            '2xl:text-[300px]'
        )}>
            <div className={cn(
                'flex flex-col gap-4 mb-4',
                'lg:hidden',
            )}>
                <div className='flex items-center gap-4'>
                    <Separator className={cn(
                        'w-8 border-2 border-secondary',
                        'lg:w-12'
                    )} />
                    <a href='https://www.facebook.com/alin.alex.peter' target='_blank'>
                        <LuFacebook size={42} className='hover:scale-120 transition-all duration-150 ease' />
                    </a>
                    <Separator className={cn(
                        'w-8 border-2 border-secondary',
                        'lg:w-12'
                    )} />
                    <a href='https://x.com/GoKoding' target='_blank'>
                        <FaXTwitter size={42} className='hover:scale-120 transition-all duration-150 ease' />
                    </a>
                    <Separator className={cn(
                        'w-8 border-2 border-secondary',
                        'lg:w-12'
                    )} />
                    <a href='https://www.instagram.com/peter_aa21' target='_blank'>
                        <LuInstagram size={42} className='hover:scale-120 transition-all duration-150 ease' />
                    </a>
                </div>
                <div className='flex items-center gap-4'>
                    <Separator className={cn(
                        'w-15 border-2 border-secondary',
                        'lg:w-27'
                    )} />
                    <a href='https://github.com/AlinAlexandruPeter' target='_blank'>
                        <LuGithub size={42} className='hover:scale-120 transition-all duration-150 ease' />
                    </a>
                    <Separator className={cn(
                        'w-8 border-2 border-secondary',
                        'lg:w-12'
                    )} />
                    <a href='https://www.linkedin.com/in/alin-alexandru-peter-3b1b93232' target='_blank'>
                        <LuLinkedin size={42} className='hover:scale-120 transition-all duration-150 ease' />
                    </a>
                </div>
                <div className='flex items-center gap-4'>
                    <Separator className={cn(
                        'w-4 border-2 border-secondary',
                        'lg:w-6'
                    )} />
                    <a href='mailto:peteralexandru00@gmail.com'>
                        <MdOutlineEmail size={42} className='hover:scale-120 transition-all duration-150 ease' />
                    </a>
                </div>
            </div>

            <div className={cn(
                'flex items-end gap-2',
                '2xl:items-start'
            )}>
                <span>Let's</span>
                <div className={cn(
                    'hidden flex-col gap-8',
                    'lg:flex lg:gap-4'
                )}>
                    <div className='flex items-center gap-4'>
                        <Separator className='w-12 border-2 border-secondary' />
                        <a href='https://www.facebook.com/alin.alex.peter' target='_blank'>
                            <LuFacebook size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                        <Separator className='w-12 border-2 border-secondary' />
                        <a href='https://x.com/GoKoding' target='_blank'>
                            <FaXTwitter size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                        <Separator className='w-12 border-2 border-secondary' />
                        <a href='https://www.instagram.com/peter_aa20' target='_blank'>
                            <LuInstagram size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Separator className='w-27 border-2 border-secondary' />
                        <a href='https://github.com/AlinAlexandruPeter' target='_blank'>
                            <LuGithub size={42} className='hover:scale-120 transition-all duration-150 ease' />
                        </a>
                        <Separator className='w-12 border-2 border-secondary' />
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
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
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
        <div className={cn(
            'hidden text-secondary w-2/5 mt-6 mx-2',
            'lg:block'
        )}>
            <div className={cn(
                'flex items-baseline gap-0 font-[plateia] text-3xl uppercase mb-6',
                'xl:text-4xl',
                '2xl:text-6xl'
            )}>
                <h1>Email</h1>
                <Separator className={cn(
                    'w-32 border-2 border-secondary scale-x-110 relative',
                    'xl:border-3',
                    '2xl:border-4'
                )} />
                <h1>Me</h1>
            </div>
            <form 
                className={cn(
                    'hidden flex-col text-4xl gap-7',
                    'lg:flex'
                )} 
                onSubmit={handleSubmit}
            >
                <div className='flex items-between w-full gap-12'>
                    <Input
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        className={cn(
                            "text-xl! placeholder:text-secondary/80",
                            '2xl:text-3xl!'
                        )}
                        value={formData.firstName}
                        onChange={handleFormChange}
                    />
                    <Input
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        className={cn(
                            "text-xl! placeholder:text-secondary/80",
                            '2xl:text-3xl!'
                        )}
                        value={formData.lastName}
                        onChange={handleFormChange}
                    />
                </div>
                <Input
                    type='email'
                    placeholder='Email'
                    name='email'
                    className={cn(
                        "text-xl! placeholder:text-secondary/80",
                        '2xl:text-3xl!'
                    )}
                    value={formData.email}
                    onChange={handleFormChange}
                />
                <Textarea
                    placeholder='Message'
                    name='message'
                    className={cn(
                        "text-xl! placeholder:text-secondary/80 resize-none",
                        '2xl:text-3xl!'
                    )}
                    value={formData.message}
                    onChange={handleFormChange}
                />
                <Button 
                    disabled={disabled} 
                    className={cn(
                        'text-lg py-2! uppercase text-[#5DECDE] bg-secondary cursor-pointer flex flex-row-reverse items-center gap-2',
                        'xl:py-4!',
                        '2xl:text-2xl 2xl:py-8!'
                    )}
                >
                    <span>
                        {state.submitting ? "Sending..." : "Submit"}
                    </span>
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