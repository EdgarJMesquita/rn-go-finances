import { FlatList } from "react-native";
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
  Button,
  ButtonText,
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
            activeOpacity={1}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryCard>
        )}
      />

      <Footer>
        <Button activeOpacity={1} onPress={handleSelectCategory}>
          <ButtonText>Selecionar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
}
