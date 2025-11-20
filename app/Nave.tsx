'use client'
import Link from "next/link";
import React, {useState} from "react";


export default function Nave() {
    const [visibleA, setVisibledA] = useState(false);
    const [visibleB, setVisibledB] = useState(false);
    const [visibleC, setVisibledC] = useState(false);
    const [visibleD, setVisibledD] = useState(false);
    const [visibleE, setVisibledE] = useState(false);
    const [visibleF, setVisibledF] = useState(false);
    const [visibleG, setVisibledG] = useState(false);
    const [visibleH, setVisibledH] = useState(false);
    const [visibleI, setVisibledI] = useState(false);
    const [visibleJ, setVisibledJ] = useState(false);
    const [visibleK, setVisibledK] = useState(false);
    const [visibleL, setVisibledL] = useState(false);

    function A() {
        setVisibledA(!visibleA);
    }

    function B() {
        setVisibledB(!visibleB);
    }

    function C() {
        setVisibledC(!visibleC);
    }

    function D() {
        setVisibledD(!visibleD);
    }

    function E() {
        setVisibledE(!visibleE);
    }

    function F() {
        setVisibledF(!visibleF);
    }

    function G() {
        setVisibledG(!visibleG);
    }
    function H() {
        setVisibledH(!visibleH);
    }
    function I() {
        setVisibledI(!visibleI);
    }
    function J() {
        setVisibledJ(!visibleJ);
    }
    function K() {
        setVisibledK(!visibleK);
    }
    function L() {
        setVisibledL(!visibleL);
    }

    return (
        <div className='relative col-start-1 row-span-full row-start-1 max-lg:hidden'>
            <div className='absolute inset-0'>
                <div
                    className='sticky top-14.25 bottom-0 left-0 h-full max-h-[calc(100dvh-(var(--spacing)*14.25))] w-2xs overflow-y-auto p-6'>
                    <div>
                        <nav className='flex flex-col gap-8'>
                            <div className='flex flex-col'>
                                <h3 className="text-normal font-bold tracking-widest  sm:text-xs/6 dark:text-gray-400">blocks</h3>
                                <ul className='flex flex-col gap-2 text-gray-500'>
                                    <Link href='/'><li className='-ml-px flex flex-col items-start gap-2 hover:bg-gray-100'>地址</li></Link>
                                    <Link href='banners'><li className='-ml-px flex flex-col items-start gap-2 hover:bg-gray-100'>横幅</li></Link>
                                    <Link href='/product'><li className='-ml-px flex flex-col items-start gap-2 hover:bg-gray-100'>产品</li></Link>
                                    <Link href='/product/product_Variants'><li className='-ml-px flex flex-col items-start gap-2 hover:bg-gray-100'>产品变体</li></Link>
                                    <Link href='/comments'><li className='-ml-px flex flex-col items-start gap-2 hover:bg-gray-100'>评论</li></Link>
                                    <Link href='/cart'><li className='-ml-px flex flex-col items-start gap-2 hover:bg-gray-100'>购物车</li></Link>
                                </ul>
                                <h3 className="text-normal font-bold tracking-widest  sm:text-xs/6 dark:text-gray-400">页面</h3>
                                <ul className='flex flex-col gap-2 text-gray-500'>
                                    <Link href='/page'><li className='-ml-px flex flex-col items-start gap-2 hover:bg-gray-100'>产品页面</li></Link>
                                </ul>
                                <h3 className="text-normal font-bold tracking-widest  sm:text-xs/6 dark:text-gray-400">组件</h3>
                                {/*图片轮播A*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> A()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-gallery-thumbnails">
                                                <rect width="18" height="14" x="3" y="3" rx="2"></rect>
                                                <path d="M4 21h1"></path>
                                                <path d="M9 21h1"></path>
                                                <path d="M14 21h1"></path>
                                                <path d="M19 21h1"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>图片轮播</button>
                                        <div style={{
                                            transform: visibleA ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <Link href='/image_carousel/basic'><li className='flex flex-col ml-8 hover:bg-gray-100 overflow-hidden' style={{
                                        height: !visibleA ? '0px' : '25px',
                                        transition: 'height 0.3s',
                                    }}>静态</li></Link>
                                </ul>
                                {/*图片查看B*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> B()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-image">
                                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                                <circle cx="9" cy="9" r="2"></circle>
                                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>图片查看器</button>
                                        <div style={{
                                            transform: visibleB ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                   <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleB ? '0px' : '25px',
                                        transition: 'height 0.3s',
                                    }}>
                                       <Link href='/image_viewer/basic'><li className='hover:bg-gray-100'>静态</li></Link>
                                   </div>
                                </ul>
                                {/*输入C*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> C()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-square-pen">
                                                <path
                                                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path
                                                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>输入</button>
                                        <div style={{
                                            transform: visibleC ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleC ? '0px' : '25px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/input'><li className='hover:bg-gray-100'>输入(带图标)</li></Link>
                                    </div>
                                </ul>
                                {/*电话号码D*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> D()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-phone">
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>电话号码</button>
                                        <div style={{
                                            transform: visibleD ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleD ? '0px' : '25px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/phone_number'><li className='hover:bg-gray-100'>电话号码输入</li></Link>
                                    </div>
                                </ul>
                                {/*价格格式E*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> E()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-dollar-sign">
                                                <line x1="12" x2="12" y1="2" y2="22"></line>
                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>价格格式</button>
                                        <div style={{
                                            transform: visibleE ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleE ? '0px' : '50px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/price_format/basic'><li className='hover:bg-gray-100'>基础</li></Link>
                                        <Link href='/price_format/sale'><li className='hover:bg-gray-100'>促销</li></Link>
                                    </div>
                                </ul>
                                {/*数量F*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> F()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-chevrons-up-down">
                                                <path d="m7 15 5 5 5-5"></path>
                                                <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>数量</button>
                                        <div style={{
                                            transform: visibleF ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleF ? '0px' : '25px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/quantity'><li className='hover:bg-gray-100'>基础</li></Link>
                                    </div>
                                </ul>
                                {/*评分-笑脸G*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> G()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-smile">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                                                <line x1="15" x2="15.01" y1="9" y2="9"></line>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>评分-笑脸</button>
                                        <div style={{
                                            transform: visibleG ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleG ? '0px' : '50px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/face_rating/basic'><li className='hover:bg-gray-100'>基础</li></Link>
                                        <Link href='/face_rating/gradient'><li className='hover:bg-gray-100'>渐变</li></Link>
                                    </div>
                                </ul>
                                {/*评分-大拇指H*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> H()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-thumbs-up">
                                                <path d="M7 10v12"></path>
                                                <path
                                                    d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>评分-大拇指
                                        </button>
                                        <div style={{
                                            transform: visibleH ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleH ? '0px' : '25px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/like_rating'><li className='hover:bg-gray-100'>基础</li></Link>
                                    </div>
                                </ul>
                                {/*评分-星星I*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> I()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-star">
                                                <path
                                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>评分-星星
                                        </button>
                                        <div style={{
                                            transform: visibleI ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleI ? '0px' : '50px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/star_rating/basic'><li className='hover:bg-gray-100'>基础</li></Link>
                                        <Link href='/star_rating/fractions'><li className='hover:bg-gray-100'>分数</li></Link>
                                    </div>
                                </ul>
                                {/*评分-点赞J*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> J()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-arrow-down-up">
                                                <path d="m3 16 4 4 4-4"></path>
                                                <path d="M7 20V4"></path>
                                                <path d="m21 8-4-4-4 4"></path>
                                                <path d="M17 4v16"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>评分-点赞
                                        </button>
                                        <div style={{
                                            transform: visibleJ ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleJ ? '0px' : '50px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/upvote_rating/basic'><li className='hover:bg-gray-100'>基础</li></Link>
                                        <Link href='/upvote_rating/motion'><li className='hover:bg-gray-100'>动画</li></Link>
                                    </div>
                                </ul>
                                {/*颜色选择器K*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> K()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-palette">
                                                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                                                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                                                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                                                <path
                                                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>颜色选择器
                                        </button>
                                        <div style={{
                                            transform: visibleK ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleK ? '0px' : '25px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/variant_color_selector/basic'><li className='hover:bg-gray-100'>基础</li></Link>
                                    </div>
                                </ul>
                                {/*选择器L*/}
                                <ul className='flex flex-col text-gray-500'>
                                    <div className='flex w-full items-center hover:bg-gray-100 gap-2' onClick={()=> L()}>
                                        <div className='my-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-circle-check">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                        </div>
                                        <button className='cursor-pointer w-full flex justify-start'>选择器
                                        </button>
                                        <div style={{
                                            transform: visibleL ? 'rotate(360deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                                <path d='m6 9 6 6 6-6'></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-8  overflow-hidden' style={{
                                        height: !visibleL ? '0px' : '75px',
                                        transition: 'height 0.3s',
                                    }}>
                                        <Link href='/variant_selector/basic'><li className='hover:bg-gray-100'>基础</li></Link>
                                        <Link href='/variant_selector/picture'><li className='hover:bg-gray-100'>图片</li></Link>
                                        <Link href='/variant_selector/multiple'><li className='hover:bg-gray-100'>多选</li></Link>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}