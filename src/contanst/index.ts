export interface Resource {
    id: number;
    name: string;
    image?: string;
    description?: string;
    link?: string;
}

export const resources: Resource[] = [
    {
        id: 1,
        name: "【韩剧】无赦之仇(2025)【7集全】【1080P】【惊悚/犯罪】【内嵌简中字幕】",
        image: "/images/img.png",
        description: "改编自同名网漫，讲述前任黑帮成员原本已脱离组织，但为了追查弟弟离奇死亡的真相，他毅然决定回归道上，不报血仇誓不罢休。",
        link: 'https://pan.quark.cn/s/762a93cfd04b'
    },
    {
        id: 2,
        name: "合同模板",
        image: "/images/img_1.png",
        description: "各行业合同模板合辑",
        link: 'https://pan.quark.cn/s/7b97e9550e17'
    }
];
