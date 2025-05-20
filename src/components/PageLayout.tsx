
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

/**
 * 页面布局组件属性接口
 */
interface PageLayoutProps {
  children: ReactNode;
}

/**
 * 页面布局组件 - 为所有页面提供一致的布局结构
 * 包括导航栏、内容区域和页脚
 */
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
