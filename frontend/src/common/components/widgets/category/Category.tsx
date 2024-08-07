import { WidgetsWrapper } from "@/common/components/widgets/WidgetsWrapper";
import { CategoryList } from "@/common/components/widgets/category/styles";
import { CategoryItem } from "@/common/components/widgets/category/CategoryItem";

//TODO добавть ссылки
export const Category = () => {
  return (
    <WidgetsWrapper title="Категории">
      <CategoryList>
        <CategoryItem icon="detailing" title="Детейлинг" link="/" />
        <CategoryItem icon="instruments" title="Тех. часть" link="/" />
        <CategoryItem icon="audio" title="Автозвук" link="/" />
        <CategoryItem icon="exhaust" title="Выхлоп" link="/" />
        <CategoryItem icon="wheel" title="Диски и шины" link="/" />
        <CategoryItem icon="chipTuning" title="Чип-тюнинг" link="/" />
        <CategoryItem icon="light" title="Фары и свет" link="/" />
        <CategoryItem icon="tuning" title="Внешний вид" link="/" />
        <CategoryItem icon="other" title="Остальное" link="/" />
      </CategoryList>
    </WidgetsWrapper>
  );
};
