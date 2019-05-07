import React, { Component } from "react";
import { MovieCarousel } from "../../components";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <MovieCarousel movieList = {sampleData}/>
      </div>
    );
  }
}

export default HomePage;

const sampleData = {
  totalCount: 30,
  entries: [
    {
      title: "10 Things I Hate About You",
      description:
        "A new kid must find a guy to date the meanest girl in school, the older sister of the girl he has a crush on, who cannot date until her older sister does.",
      type: "movie",
      publishedDate: 931478400000,
      availableDate: 931478400000,
      metadata: [
        {
          value: "en",
          name: "language"
        }
      ],
      contents: [
        {
          url:
            "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
          format: "mp4",
          width: 640,
          height: 360,
          language: "en",
          duration: 3600000,
          geoLock: false,
          id: "vid_103"
        }
      ],
      credits: [
        {
          role: "Director",
          name: "Gil Junger"
        },
        {
          role: "Heath Ledger",
          name: "Heath Ledger"
        },
        {
          role: "Julia Stiles",
          name: "Julia Stiles"
        },
        {
          role: "Joseph Gordon-Levitt",
          name: "Joseph Gordon-Levitt"
        }
      ],
      parentalRatings: [
        {
          scheme: "MPAA",
          rating: "PG_13"
        }
      ],
      images: [
        {
          type: "cover",
          url: "http://lorempixel.com/214/317/?t=1",
          width: 214,
          height: 317,
          id: "f67e6e8a7478d1dae24e869f3d7081cf"
        }
      ],
      categories: [
        {
          title: "Comedy",
          description: "Comedy movies",
          id: "movies-comedy"
        },
        {
          title: "Drama",
          description: "Drama movies",
          id: "movies-drama"
        },
        {
          title: "Romance",
          description: "Romantic movies",
          id: "movies-romance"
        }
      ],
      id: "10-things-i-hate-about-you"
    },
    {
      title: "12 Years a Slave",
      description:
        "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
      type: "movie",
      publishedDate: 1389312000000,
      availableDate: 1389312000000,
      metadata: [
        {
          value: "en",
          name: "language"
        }
      ],
      contents: [
        {
          url:
            "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
          format: "mp4",
          width: 640,
          height: 360,
          language: "en",
          duration: 7200000,
          geoLock: false,
          id: "vid_101"
        }
      ],
      credits: [
        {
          role: "Director",
          name: "Steve McQueen"
        },
        {
          role: "Chiwetel Ejiofor",
          name: "Chiwetel Ejiofor"
        },
        {
          role: "Michael Kenneth Williams",
          name: "Michael Kenneth Williams"
        },
        {
          role: "Michael Fassbender",
          name: "Michael Fassbender"
        }
      ],
      parentalRatings: [
        {
          scheme: "MPAA",
          rating: "R"
        }
      ],
      images: [
        {
          type: "cover",
          url: "http://lorempixel.com/214/317/",
          width: 214,
          height: 317,
          id: "0fed2015ee5eed694899959976bd49d3"
        }
      ],
      categories: [
        {
          title: "Biography",
          description: "Biography movies",
          id: "movies-biography"
        },
        {
          title: "Drama",
          description: "Drama movies",
          id: "movies-drama"
        },
        {
          title: "History",
          description: "History movies",
          id: "movies-history"
        }
      ],
      id: "12-years-a-slave"
    },
    {
      title: "2 Guns",
      description:
        "A DEA agent and a naval intelligence officer find themselves on the run after a botched attempt to infiltrate a drug cartel. While fleeing, they learn the secret of their shaky alliance: Neither knew that the other was an undercover agent.",
      type: "movie",
      publishedDate: 1376611200000,
      availableDate: 1376611200000,
      metadata: [
        {
          value: "en",
          name: "language"
        }
      ],
      contents: [
        {
          url:
            "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
          format: "mp4",
          width: 640,
          height: 360,
          language: "en",
          duration: 9000000,
          geoLock: false,
          id: "vid_102"
        }
      ],
      credits: [
        {
          role: "Director",
          name: "Baltasar Kormákur"
        },
        {
          role: "Denzel Washington",
          name: "Denzel Washington"
        },
        {
          role: "Mark Wahlberg",
          name: "Mark Wahlberg"
        },
        {
          role: "Paula Patton",
          name: "Paula Patton"
        }
      ],
      parentalRatings: [
        {
          scheme: "MPAA",
          rating: "R"
        }
      ],
      images: [
        {
          type: "cover",
          url: "http://lorempixel.com/214/317/?t=2",
          width: 214,
          height: 317,
          id: "65651bfb058aa122e2a3734ae473484c"
        }
      ],
      categories: [
        {
          title: "Action",
          description: "Action movies",
          id: "movies-action"
        },
        {
          title: "Comedy",
          description: "Comedy movies",
          id: "movies-comedy"
        },
        {
          title: "Crime",
          description: "Crime movies",
          id: "movies-crime"
        },
        {
          title: "Drama",
          description: "Drama movies",
          id: "movies-drama"
        },
        {
          title: "Thriller",
          description: "Thriller movies",
          id: "movies-thriller"
        }
      ],
      id: "2-guns"
    }
  ]
};
