"use client";

import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Nave from "@/app/Nave";
import Product_01 from "@/app/components/product/Product_01";
import Product_02 from "@/app/components/product/Product_02";
import Product_03 from "@/app/components/product/Product_03";
import Product_04 from "@/app/components/product/Product_04";
import Product_05 from "@/app/components/product/Product_05";
import Product_06 from "@/app/components/product/Product_06";
import Product_07 from "@/app/components/product/Product_07";
import Product_08 from "@/app/components/product/Product_08";
import Product_09 from "@/app/components/product/Product_09";
import Product_10 from "@/app/components/product/Product_10";
import Product_11 from "@/app/components/product/Product_11";
import Product_12 from "@/app/components/product/Product_12";
import Product_13 from "@/app/components/product/Product_13";
import Head from "@/app/Head";


export default function Product() {
    const onChange = (key: string) => {

    };

    const items1: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_01/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items2: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_02/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items3: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_03/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items4: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_04/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items5: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_05/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items6: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_06/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items7: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_07/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items8: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_08/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items9: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_09/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items10: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_10/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items11: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_11/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items12: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_12/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];

    const items13: TabsProps['items'] = [
        {
            key: '1',
            label: '预览',
            children: <Product_13/>,
        },
        {
            key: '2',
            label: '代码',
            children: 'Content of Tab Pane 2',
        },
    ];
    return (
        <div>
            <div className='fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 dark:border-white/10'>
                <Head/>
                <div
                    className="flex h-14 items-center border-t border-gray-950/5 bg-white px-4 sm:px-6 lg:hidden dark:border-white/10 dark:bg-gray-950">
                    <button type="button"
                            className="relative inline-grid size-7 place-items-center rounded-md text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/10 -ml-1.5"
                            aria-label="Open navigation menu"><span
                        className="absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden"></span>
                        <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd"
                                  d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 6.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <ol className="sticky ml-4 flex min-w-0 items-center gap-2 text-sm/6 whitespace-nowrap">
                        <li className="flex items-center gap-2">产品
                        </li>
                    </ol>
                </div>
            </div>
            <div
                className='grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] pt-26.25 lg:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] lg:pt-14.25 xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem]'>
                <Nave/>
                <div className='col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10'></div>
                <div className='relative row-start-1 grid grid-cols-subgrid lg:col-start-3'>
                    <div className='mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-7xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]'>
                        <div className='flex flex-1 flex-col gap-6 px-4 pt-8 pb-24 sm:px-6 xl:pr-0'>
                            <h1 className='text-3xl font-semibold'>产品</h1>
                            <p className='mb-8 text-lg text-fd-muted-foreground'>产品模块。</p>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-01</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items1} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-02</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items2} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-03</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items3} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-04</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items4} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-05</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items5} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-06</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items6} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-07</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items7} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-08</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items8} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-09</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items9} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-10</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items10} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-11</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items11} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-12</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items12} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>产品-13</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className="relative min-h-screen w-full">
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full p-4'>
                                            <div className='relative flex w-full flex-col rounded-md min-h-[300px] md:px-6'>
                                                <Tabs defaultActiveKey="1" items={items13} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='col-start-4 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10'></div>
            </div>
        </div>
    );
}
