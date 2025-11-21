import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/app/components/ui/According';

export function ProductInfo() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>产品介绍</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        我们的旗舰产品融合了尖端科技与时尚设计。
                        采用优质材料打造，提供无与伦比的 性能和可靠性.
                    </p>
                    <p>
                        主要特性包括先进的处理能力，以及专为初学者和专家设计的直观用户界面.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>快递服务</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>包邮(偏远地区除外)</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>退货政策</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        我们为所有产品提供完善的 30 天退货政策。如果您不完全满意，只需将商品以原包装退回即可.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
