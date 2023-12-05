// import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "./Banner.tsx";

describe("Banner", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });
  });

  it("renders the banner on small screens", () => {
    window.innerWidth = 320;
    render(<Banner />);
    const bannerImg = screen.getByAltText("Phone banner");
    expect(bannerImg).toBeInTheDocument();
  });

  it("renders the banner on large screens", () => {
    window.innerWidth = 1800;
    render(<Banner />);
    const bannerImg = screen.getByAltText("Desktop banner");
    expect(bannerImg).toBeInTheDocument();
  });
});
