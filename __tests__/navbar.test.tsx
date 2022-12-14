import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../lib/constants";

describe("Navbar", () => {
  it("renders a title", () => {
    render(<Navbar />);

    expect(screen.getByText("Pure")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("by")).toBeInTheDocument();
  });

  it("renders a twitter link from title", () => {
    render(<Navbar />);

    const twitterUsername = screen.getByText("asyrafhussin4");
    expect(twitterUsername).toBeInTheDocument();
    expect(twitterUsername).toHaveAttribute("href", TWITTER_URL);
  });

  const links = [
    { id: "follow-twitter", href: TWITTER_URL },
    { id: "follow-youtube", href: YOUTUBE_URL },
    { id: "follow-github", href: GITHUB_URL },
    { id: "follow-linkedin", href: LINKEDIN_URL },
  ];

  it.each(links)("renders a $id link", ({ id, href }) => {
    render(<Navbar />);

    expect(screen.getByTestId(id)).toHaveAttribute("href", href);
  });
});
