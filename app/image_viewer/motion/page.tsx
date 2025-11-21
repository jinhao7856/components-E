"use client";

import Nave from "@/app/Nave";
import ImageViewer_Motion from "@/app/components/imageViewer/ImageViewer_motion";
import Head from "@/app/Head";


export default function Image_Viewer_Motion() {

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
                        <li className="flex items-center gap-2">图片查看器-动态
                        </li>
                    </ol>
                </div>
            </div>
            <div
                className='grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] pt-26.25 lg:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] lg:pt-14.25 xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem]'>
                <Nave/>
                <div className='col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10'></div>
                <div className='relative row-start-1 grid grid-cols-subgrid lg:col-start-3'>
                    <div className='mx-auto grid w-full max-w-2xl grid-cols-1 gap-2 xl:max-w-7xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]'>
                        <div className='flex flex-1 flex-col gap-6 px-4 pt-8 pb-24 sm:px-6 xl:pr-0'>
                            <h1 className='text-3xl font-semibold'>图片查看器</h1>
                            <p className='mb-8 text-lg text-fd-muted-foreground'>一个用于显示动态图像的组件</p>
                            <h3 className='flex font-semibold scroll-m-28 flex-row items-center'>图片查看器 - 动态</h3>
                            <div className='relative z-0 flex items-center justify-between pb-4'>
                                <div className='relative mr-auto w-full'>
                                    <div
                                        className='inline-flex h-9 items-center border-zinc-200 text-zinc-900 dark:border-zinc-800 dark:text-zinc-50 w-full justify-start rounded-none border-b bg-transparent p-0'>
                                        <button type="button" role="tab" aria-selected="true"
                                                data-state="active"
                                                className="cursor-pointer focus:border-b-3 focus:border-purple-500 w-[50px]">
                                            <div className='align-[inherit]'>预览</div>
                                        </button>
                                        <button type="button" role="tab" aria-selected="true"
                                                data-state="active"
                                                className="cursor-pointer focus:border-b-3 focus:border-purple-500 w-[50px]">
                                            <div className='align-[inherit]'>代码</div>
                                        </button>
                                    </div>
                                    <div className='focus-visible:ring-ring relative mt-2 rounded-md border border-zinc-200 ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:border-zinc-700'>
                                        <div className='preview flex min-h-[450px] w-full justify-center p-4'>
                                            <div className='relative flex w-full flex-col items-center justify-center rounded-md min-h-[300px] md:px-6'>
                                                <div className="relative min-h-screen w-full">
                                                    <ImageViewer_Motion imageUrl={"https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-xl:hidden'>
                            <div
                                className='sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24'>
                                <div>右边副菜单</div>
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
