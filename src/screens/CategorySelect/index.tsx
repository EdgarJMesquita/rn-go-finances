import { FlatList, Text } from "react-native";
import { Button } from "../../components/Form/Button";
import { categories, Category } from "../../utils/category";
import {
  CategoryCard,
  Container,
  Footer,
  Header,
  Icon,
  Name,
  Separator,
  Title,
} from "./styles";

interface Props {
  category?: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleSelectCategory() {
    closeSelectCategory();
  }
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={({ key }) => key}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <CategoryCard
            onPress={() => setCategory(item)}
            isActive={category?.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryCard>
        )}
      />

      <Footer>
        <Button onPress={handleSelectCategory}>Selecionar</Button>
      </Footer>
    </Container>
  );
}
