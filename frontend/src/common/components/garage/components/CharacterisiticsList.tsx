import {
  GarageCharcteristicList,
  GarageCharcteristicTitle,
  GarageContentWrapper,
} from "@/common/components/garage/styles";
import { CharacteristicsItem } from "@/common/components/garage/components/CharacteristicsItem";

interface CharacterisiticsListProps {
  title: string;
}

export const CharacterisiticsList = ({ title }: CharacterisiticsListProps) => {
  return (
    <GarageContentWrapper>
      <GarageCharcteristicTitle>{title}</GarageCharcteristicTitle>

      {title === "Характеристики" ? (
        <GarageCharcteristicList>
          <CharacteristicsItem icon="calendar" title="Год" description={"2024"} />
          <CharacteristicsItem icon="driveUnit" title="Привод" description={"Полный"} />
          <CharacteristicsItem icon="engine" title="Двигатель" description={"4.0 / 680 л.с. / Бензин"} />
          <CharacteristicsItem icon="steeringWheel" title="Расположение руля" description={"Слева"} />
          <CharacteristicsItem icon="transmission" title="Коробка" description={"Роботизированная"} />
          <CharacteristicsItem icon="carColor" title="Цвет" description={"Черный"} />
        </GarageCharcteristicList>
      ) : (
        //TODO status
        <GarageCharcteristicList>
          <CharacteristicsItem icon="garageOwn" title="Статус" description={"Владеет"} />
          <CharacteristicsItem icon="garageSell" title="Статус" description={"В продаже"} />
          <CharacteristicsItem icon="garageSold" title="Статус" description={"Продано"} />
          <CharacteristicsItem icon="ruble" title="Стоимость" description={"2 500 000 ₽  "} />
        </GarageCharcteristicList>
      )}
    </GarageContentWrapper>
  );
};
