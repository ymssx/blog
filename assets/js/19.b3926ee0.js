(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{514:function(e,a,s){e.exports=s.p+"assets/img/1.4135cfb7.png"},569:function(e,a,s){"use strict";s.r(a);var r=s(22),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("DocInfo"),e._v(" "),r("h2",{attrs:{id:"enhancing-intrinsic-adversarial-robustness-via-feature-pyramid-decoder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enhancing-intrinsic-adversarial-robustness-via-feature-pyramid-decoder"}},[e._v("#")]),e._v(" Enhancing Intrinsic Adversarial Robustness via Feature Pyramid Decoder")]),e._v(" "),r("p",[e._v("inner denoising 被放在浅层block")]),e._v(" "),r("p",[e._v("// todo")]),e._v(" "),r("h2",{attrs:{id:"adversarial-self-supervised-contrastive-learning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adversarial-self-supervised-contrastive-learning"}},[e._v("#")]),e._v(" Adversarial Self-Supervised Contrastive Learning")]),e._v(" "),r("img",{attrs:{src:s(514)}}),e._v(" "),r("ol",[r("li",[e._v("提出了一个instance-wise的对抗攻击方法")]),e._v(" "),r("li",[e._v("不用标签进行对抗训练，最大化对抗样本和干净样本之间的相似性")]),e._v(" "),r("li",[e._v("在不使用标签的情况下获得了媲美TRADES的防御效果。在使用标签之后展现了更好的鲁棒性，同时没有降低干净样本的检测精度。")])]),e._v(" "),r("h2",{attrs:{id:"a-self-supervised-approach-for-adversarial-robustness"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-self-supervised-approach-for-adversarial-robustness"}},[e._v("#")]),e._v(" A Self-supervised Approach for Adversarial Robustness")]),e._v(" "),r("p",[e._v("提出一个自监督的对抗训练方法。一个通用性的图片预处理模块（a self-supervised AT mechanism in the input space）（将攻击成功率从82.6%降低到了31.9%）")]),e._v(" "),r("Link",{attrs:{title:"github-NRP",url:"https://github.com/\nMuzammal-Naseer/NRP",img:"/github.jfif"}}),e._v(" "),r("h4",{attrs:{id:"传统的对抗训练at"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传统的对抗训练at"}},[e._v("#")]),e._v(" 传统的对抗训练AT")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("task dependency")]),e._v("：普通的对抗训练（AT）不能直接迁移到其他任务")]),e._v(" "),r("li",[r("strong",[e._v("computation cost")]),e._v("：AT需要大量的数据集（ImageNet），计算成本高")]),e._v(" "),r("li",[r("strong",[e._v("accuracy drop")]),e._v("：会导致模型在干净数据集上的准确率降低")]),e._v(" "),r("li",[r("strong",[e._v("label leakage")]),e._v("：过拟合")])]),e._v(" "),r("p",[e._v("对图片进行预处理的方法可以对不同任务进行通用防御，但是在白盒攻击下无效。input transformation（高斯模糊、JPEG压缩）反而可能加强攻击效果。")]),e._v(" "),r("p",[e._v("本文提出a self-supervised AT mechanism in the input space\n本方法的优点在于其泛化性，一次训练可以加到不同的模型中")]),e._v(" "),r("h4",{attrs:{id:"之前的防御方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#之前的防御方法"}},[e._v("#")]),e._v(" 之前的防御方法")]),e._v(" "),r("p",[e._v("JPEG: 移除人眼无法察觉的高频信息;")]),e._v(" "),r("p",[e._v("Total Variation Minimization (TVM): A compressed sensing approach")]),e._v(" "),r("p",[e._v("random resize && padding")]),e._v(" "),r("h4",{attrs:{id:"相关工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关工作"}},[e._v("#")]),e._v(" 相关工作")]),e._v(" "),r("p",[e._v("The basic intuition behind our defense mechanism is to effectively use information contained in the feature space of deep networks to obtain an automatic supervisory signal")]),e._v(" "),r("p",[e._v("提出Neural Representation Purifier (NRP)以清除扰动")]),e._v(" "),r("p",[e._v("x' -> Pθ -> 净化")]),e._v(" "),r("p",[e._v("Pθ和Cφ鉴别器做对抗，以及一个feature extrator Fψ。整体和GAN比较类似。")]),e._v(" "),r("p",[e._v("Fψ是在ImageNet上预训练的，其它是训练出来的。")]),e._v(" "),r("p",[r("emoji",{attrs:{e:"❓"}}),e._v(" 对抗扰动x'是通过最大化Fψ在随机方向下的响应得到的")],1),e._v(" "),r("p",[e._v("Pθ努力恢复对抗样本通过最小化距离")]),e._v(" "),r("h3",{attrs:{id:"self-supervision"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#self-supervision"}},[e._v("#")]),e._v(" Self Supervision")]),e._v(" "),r("h4",{attrs:{id:"self-supervision-perturbation-ssp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#self-supervision-perturbation-ssp"}},[e._v("#")]),e._v(" Self-Supervision Perturbation (SSP)")]),e._v(" "),r("p",[e._v("白盒攻击只能专注于某一特定network，不能泛化到其它网络。")]),e._v(" "),r("p",[e._v("因此本工作旨在提出一种自监督的跨任务跨模型的扰动方法，同时提出一种transferable的防御方法。")]),e._v(" "),r("p",[e._v("实验表明，feature distortion能力（最终特征表达的差异）能影响攻击方法的transferability。所以本文直接最大化feature dstortion能力。")]),e._v(" "),r("p",[e._v("黑盒攻击操作deep network的逻辑空间")]),e._v(" "),r("p",[e._v("3个loss")]),e._v(" "),r("h3",{attrs:{id:"实验细节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验细节"}},[e._v("#")]),e._v(" 实验细节")]),e._v(" "),r("p",[e._v("训练在MS-COCO上随机选择25K图片作为数据集")]),e._v(" "),r("p",[e._v("图片resize到 480 * 480 * 3")]),e._v(" "),r("p",[e._v("SSP的输出作为NRP的输入，同时干净数据集作为标签")]),e._v(" "),r("p",[e._v("训练时，随机将图片裁剪到128 * 128 * 3")]),e._v(" "),r("p",[e._v("batch_size = 16\nlearning_rate = 10-4\nα = 5 * 10-3\nγ = 1 × 10−2\nλ = 1")])],1)}),[],!1,null,null,null);a.default=t.exports}}]);