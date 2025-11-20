import { Mail, Eye } from "lucide-react";
import InputIcon from '@/app/components/input/Input_icon';
import { Input } from '@/app/components/ui/Input';
export default function Input_Icon_Ex_01() {
    return (
        <div className="max-w-sm space-y-4">
            <InputIcon placeholder="头尾两个图标" startIcon={Mail} endIcon={Eye} />
            <InputIcon placeholder="一个开始图标" startIcon={Mail} />
            <InputIcon placeholder="一个结尾图标" endIcon={Eye} />
            <InputIcon placeholder="无图标" />
            <Input placeholder="标准输入框" />
        </div>
    );
}
