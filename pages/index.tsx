import Seo from "../components/Seo";

export default function Home() {
    return (
        <div>
            <Seo title = "Home"/>
            <h1 className="active">Hello</h1>
            <style jsx>{`
              a {
              color: white;
              }
            `}</style>
        </div>
    );
}
//이 컴포넌트 안에 들어가는 모든 것들이 우리의 html의 head 안에 보여질 거임