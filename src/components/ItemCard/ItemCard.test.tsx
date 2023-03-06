import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import providerWrapper from "../../mocks/providerWrapper";
import ItemCard from "./ItemCard";

const mockDeleteItem = jest.fn();

jest.mock("../../hooks/useList/useList", () => {
  return () => ({
    deleteLocalStorageList: mockDeleteItem,
  });
});

describe("Given an ItemCard", () => {
  describe("When its rendered", () => {
    const itemText = "Patatas";
    const itemId = "12e";
    test("Then it should show an item text 'Patatas'", () => {
      render(<ItemCard id={itemId} text={itemText} />, {
        wrapper: providerWrapper,
      });
      const expectedItem = screen.queryByText("Patatas");

      expect(expectedItem).toHaveTextContent(itemText);
    });

    test("And it should show a button for delete the item", async () => {
      render(<ItemCard id={itemId} text={itemText} />, {
        wrapper: providerWrapper,
      });

      const button = screen.queryByRole("button");
      await userEvent.click(button!);

      expect(button).toBeInTheDocument();
      expect(mockDeleteItem).toHaveBeenCalled();
    });
  });
});
