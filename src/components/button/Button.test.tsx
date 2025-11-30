import type React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import { Button } from "./Button";

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe("Button", () => {
  it("renders with default primary variant", () => {
    renderWithMantine(<Button>Primary</Button>);

    const button = screen.getByRole("button", { name: "Primary" });
    expect(button).toBeInTheDocument();
  });

  it("renders secondary variant", () => {
    renderWithMantine(<Button variant="secondary">Secondary</Button>);

    const button = screen.getByRole("button", { name: "Secondary" });
    expect(button).toBeInTheDocument();
  });

  it("renders subtle variant", () => {
    renderWithMantine(<Button variant="subtle">Subtle</Button>);

    const button = screen.getByRole("button", { name: "Subtle" });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();

    renderWithMantine(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
