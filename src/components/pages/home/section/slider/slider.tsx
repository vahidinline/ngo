import { Carousel, Image, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

interface SliderProps {
  slides: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}
const Homeslider = (props: SliderProps) => {
  return (
    <Layout>
      <Content>
        <Carousel autoplay>
          {props.slides.map((slide) => (
            <div key={slide.id}>
              <h3>{slide.title}</h3>

              <Image
                preview={false}
                src={slide.image}
                alt={slide.title}
                width="50%"
                height="50%"
              />
              <p>{slide.description}</p>
            </div>
          ))}
        </Carousel>
      </Content>
    </Layout>
  );
};

export default Homeslider;
