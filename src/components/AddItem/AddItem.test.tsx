import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import providerWrapper from "../../mocks/providerWrapper";
import AddItem from "./AddItem";

const mockAddItemAction = jest.fn();

jest.mock("../../hooks/useList/useList", () => {
  return () => ({
    setLocalStorageList: mockAddItemAction,
  });
});

describe("Given a AddItem component", () => {
  describe("When its rendered", () => {
    test("Then it should show 2 input elements", () => {
      const expectedTotalInputs = 1;
      const placeholderText = "Quantity";

      render(<AddItem />, {
        wrapper: providerWrapper,
      });

      const formInput = screen.queryAllByRole("textbox");
      const numberInput = screen.queryByPlaceholderText(placeholderText);

      expect(formInput).toHaveLength(expectedTotalInputs);
      expect(numberInput).toBeInTheDocument();
    });
  });

  describe("When its button 'Add Item' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const buttonText = "Add Item";
      const item = "Patata";
      const quantity = "1";

      render(<AddItem />, {
        wrapper: providerWrapper,
      });

      const itemInput = screen.queryByPlaceholderText("Add Item")!;
      await userEvent.type(itemInput, item);
      const quantityInput = screen.queryByPlaceholderText("Quantity")!;
      await userEvent.type(quantityInput, quantity);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockAddItemAction).toHaveBeenCalled();
    });
  });
});
