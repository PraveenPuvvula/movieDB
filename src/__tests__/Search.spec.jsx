import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";
import ShowCard from "../ShowCard";
import preload from "../../data.json";

test("should Search component render correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("should show correct number of searches", () => {
  const component = shallow(<ShowCard />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("should show correct number of shows based on search critertia", () => {
  const searchWord = "black";
  const component = shallow(<Search />);
  component.find("input").simulate("change", { target: { value: searchWord } });
  const showCount = preload.shows.filter((show) =>
    `${show.title} ${show.description}`
      .toUpperCase()
      .indexOf(searchWord.toUpperCase() >= 0)
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
