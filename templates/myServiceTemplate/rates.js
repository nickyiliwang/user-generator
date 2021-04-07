module.exports = {
  boarding: {
    // Dog
    dog: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Cat
    cat: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Cat (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Kitten (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Cat (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Cat (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Kitten (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Cat (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Reptile
    reptile: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Turtle",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Lizard",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Snake",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Turtle",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Lizard",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Snake",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Bird
    bird: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per bird",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per bird",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // SmallPet
    small_pets: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per smallPet (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per smallPet (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per smallPet (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
  },
  daycare: {
    // Dog
    dog: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Cat
    cat: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Cat (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Kitten (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Cat (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Cat (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Kitten (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Cat (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Reptile
    reptile: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Turtle",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Lizard",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Snake",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Turtle",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Lizard",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Snake",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Bird
    bird: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per bird",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per bird",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // SmallPet
    small_pets: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per smallPet (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per smallPet (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per smallPet (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
  },
  drop_in: {
    // Dog
    dog: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Cat
    cat: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Cat (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Kitten (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Cat (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Cat (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Kitten (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Cat (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Reptile
    reptile: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Turtle",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Lizard",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Snake",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Turtle",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Lizard",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Snake",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Bird
    bird: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per bird",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per bird",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // SmallPet
    small_pets: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per smallPet (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per smallPet (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per smallPet (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
  },
  walking: {
    // Dog
    dog: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Cat
    cat: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Cat (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Kitten (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Cat (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Cat (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Kitten (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Cat (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Reptile
    reptile: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per Turtle",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Lizard",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Snake",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Turtle",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Lizard",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Snake",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // Bird
    bird: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per bird",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per bird",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per bird",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
    // SmallPet
    small_pets: {
      regular: {
        description: "This will be your default price for night",
        controlPanel: [
          {
            option: "Per smallPet (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per smallPet (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per smallPet (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      holiday: {
        description:
          "If demand is high when holidays, What’s the price you’re willing to charge?",
        controlPanel: [
          {
            option: "Per Dog (1 year+)",
            per: "/night",
            price: "35",
            value: 35,
          },
          {
            option: "Per Puppy (<1 year)",
            per: "/night",
            price: "40",
            value: 40,
          },
          {
            option: "Per Senior Dog (10years+)",
            per: "/night",
            price: "40",
            value: 40,
          },
        ],
      },
      length_of_stay: {
        description: `Encourage pet lover to book longer stays by offering a discount.`,
        controlPanel: [
          {
            option: "Weekly discount",
            length: "7 to 27 nights",
            price: "12",
            per: "% off",
            value: 12,
          },
          {
            option: "Monthly discount",
            length: "After 27 nights",
            price: "15",
            per: "% off",
            value: 15,
          },
          {
            option: "Subscribe discount",
            length: "Repeat weekly",
            price: "20",
            per: "% off",
            value: 20,
          },
        ],
      },
    },
  },
  grooming: {
    // DOG
    dog: {
      bath_haircut: {
        description: "This will be your default price for Bath + Haircut",
        controlPanel: [
          { option: "Per Small Dog", price: "12", per: "/1time", value: 15 },
          { option: "Per Medium Dog", price: "15", per: "/1time", value: 15 },
          { option: "Per Large Dog", price: "20", per: "/1time", value: 15 },
          { option: "Per XLarge Dog", price: "25", per: "/1time", value: 15 },
        ],
      },
      bath_trim: {
        description: "This will be your default price for Bath + Trim",
        controlPanel: [
          { option: "Per Small Dog", price: "12", per: "/1time", value: 15 },
          { option: "Per Medium Dog", price: "15", per: "/1time", value: 15 },
          { option: "Per Large Dog", price: "20", per: "/1time", value: 15 },
          { option: "Per XLarge Dog", price: "25", per: "/1time", value: 15 },
        ],
      },
      bath_brush: {
        description: "This will be your default price for Bath + Brush",
        controlPanel: [
          { option: "Per Small Dog", price: "12", per: "/1time", value: 15 },
          { option: "Per Medium Dog", price: "15", per: "/1time", value: 15 },
          { option: "Per Large Dog", price: "20", per: "/1time", value: 15 },
          { option: "Per XLarge Dog", price: "25", per: "/1time", value: 15 },
        ],
      },
    },
    // PUPPY
    puppy: {
      bath_trim: {
        description: "This will be your default price for Bath + Haircut",
        controlPanel: [
          {
            option: "Per 2-4 months dog",
            price: "12",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per 5-7 months dog",
            price: "15",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per 8-10 months dog",
            price: "20",
            per: "/1time",
            value: 15,
          },
        ],
      },
      bath_brush: {
        description: "This will be your default price for Bath + Brush",
        controlPanel: [
          {
            option: "Per 2-4 months dog",
            price: "12",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per 5-7 months dog",
            price: "15",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per 8-10 months dog",
            price: "20",
            per: "/1time",
            value: 15,
          },
        ],
      },
    },
    // CAT
    cat: {
      bath_haircut: {
        description: "This will be your default price for Bath + Haircut",
        controlPanel: [
          {
            option: "Per Short Hair Cat",
            price: "12",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per Long Hair Cat",
            price: "15",
            per: "/1time",
            value: 15,
          },
        ],
      },
      bath_trim: {
        description: "This will be your default price for Bath + Haircut",
        controlPanel: [
          {
            option: "Per Short Hair Cat",
            price: "12",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per Long Hair Cat",
            price: "15",
            per: "/1time",
            value: 15,
          },
        ],
      },
      bath_brush: {
        description: "This will be your default price for Bath + Haircut",
        controlPanel: [
          {
            option: "Per Short Hair Cat",
            price: "12",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per Long Hair Cat",
            price: "15",
            per: "/1time",
            value: 15,
          },
        ],
      },
    },
    // KITTEN
    kitten: {
      bath_trim: {
        description: "This will be your default price for Bath + Haircut",
        controlPanel: [
          {
            option: "Per 2-4 months kitten",
            price: "12",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per 5-7 months kitten",
            price: "15",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per 8-10 months kitten",
            price: "20",
            per: "/1time",
            value: 15,
          },
        ],
      },
      bath_brush: {
        description: "This will be your default price for Bath + Brush",
        controlPanel: [
          {
            option: "Per 2-4 months dog",
            price: "12",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per 5-7 months dog",
            price: "15",
            per: "/1time",
            value: 15,
          },
          {
            option: "Per 8-10 months dog",
            price: "20",
            per: "/1time",
            value: 15,
          },
        ],
      },
    },
  },
  aquarist: {
    // SALTWATER
    saltwater: {
      setting_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
      maintaining_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
      package_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
    },
    // FRESHWATER
    freshwater: {
      setting_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
      maintaining_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
      package_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
    },
    // PLANTED_TANK
    planted_tank: {
      setting_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
      maintaining_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
      package_rate: {
        description: "This will be your default price tank",
        controlPanel: [
          {
            option: "Small tank (<10L)",
            price: "40",
            per: "/setting",
            value: 40,
          },
          {
            option: "Medium tank (11-20L)",
            price: "50",
            per: "/setting",
            value: 50,
          },
          {
            option: "Large tank (21-30L)",
            price: "60",
            per: "/setting",
            value: 60,
          },
        ],
      },
    },
  },
};
