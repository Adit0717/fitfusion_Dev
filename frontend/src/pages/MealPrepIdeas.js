import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const MealPrepIdeas = () => {
  const sections = [
    {
      title: "Getting Started with Meal Prep",
      description: "Meal prepping is an excellent way to ensure you stick to your nutrition goals, save time, and reduce food waste. Here are some steps to get started.",
      guidelines: [
        {
          subtitle: "Define Your Goals",
          text: "Determine what you want to achieve with meal prepping. Are you looking to lose weight, gain muscle, or simply eat healthier? Clear goals will guide your meal choices."
        },
        {
          subtitle: "Choose Your Recipes",
          text: "Select a variety of recipes that fit your goals and that you enjoy. Aim for balanced meals that include proteins, healthy fats, and carbohydrates."
        },
        {
          subtitle: "Create a Meal Plan",
          text: "Draft a weekly meal plan that outlines what you will eat each day. Consider meals for breakfast, lunch, dinner, and snacks."
        },
      ],
    },
    {
      title: "How Much to Cook",
      description: "Knowing how much to prepare can help you avoid food waste and ensure you have enough meals for the week.",
      guidelines: [
        {
          subtitle: "Portion Control",
          text: "Portion sizes will depend on your individual goals, activity level, and hunger. Use a food scale to measure portions accurately."
        },
        {
          subtitle: "Batch Cooking",
          text: "Prepare larger quantities of staples (grains, proteins, veggies) at once, which can be mixed and matched throughout the week."
        },
        {
          subtitle: "Leftovers",
          text: "Incorporate leftovers from dinner into your meal prep for lunch the next day. This saves time and ensures minimal waste."
        },
      ],
    },
    {
      title: "Storage Tips",
      description: "Proper storage is essential for keeping your meals fresh and safe to eat.",
      guidelines: [
        {
          subtitle: "Use Airtight Containers",
          text: "Invest in high-quality, airtight containers to keep your meals fresh. Glass containers are a great option as they are microwave and dishwasher safe."
        },
        {
          subtitle: "Label and Date",
          text: "Always label your meals with the contents and date prepared. This will help you keep track of freshness and prevent food waste."
        },
        {
          subtitle: "Freezing Meals",
          text: "Consider freezing meals that you won't eat within the week. Most cooked meals can be frozen and reheated easily."
        },
      ],
    },
    {
      title: "Sticking to Your Meal Prep",
      description: "Staying committed to your meal prep routine is crucial for success.",
      guidelines: [
        {
          subtitle: "Schedule Prep Time",
          text: "Set aside specific times each week for meal prepping. Consistency is key to building a habit."
        },
        {
          subtitle: "Keep It Simple",
          text: "Don't overcomplicate your meals. Simple, easy-to-prepare dishes can be just as nutritious and satisfying."
        },
        {
          subtitle: "Stay Motivated",
          text: "Find motivation by tracking your progress and celebrating small wins. Consider sharing your journey with friends or on social media."
        },
      ],
    },
    {
      title: "Meal Prep Strategies",
      description: "Utilize these strategies to make your meal prep more efficient and enjoyable.",
      guidelines: [
        {
          subtitle: "Theme Nights",
          text: "Assign theme nights (e.g., Taco Tuesday, Stir Fry Friday) to make meal planning fun and exciting."
        },
        {
          subtitle: "Prep Once, Eat All Week",
          text: "Choose recipes that can be made in bulk and stored for the week, such as soups, stews, or grain bowls."
        },
        {
          subtitle: "Experiment with Flavors",
          text: "Use herbs, spices, and marinades to enhance the flavor of your meals. This will keep things interesting and prevent meal fatigue."
        },
      ],
    },
  ];

  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Meal Prep Ideas
      </Typography>

      {sections.map((section, index) => (
        <Box
          key={index}
          mb={4}
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
            {section.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, mb: 2, color: '#555' }}>
            {section.description}
          </Typography>

          {section.guidelines.map((item, i) => (
            <Box key={i} mb={1}>
              <Typography variant="subtitle1" sx={{ fontWeight: '500', fontSize: '1.1rem', color: '#333', fontWeight: 'bold' }}>
                {item.subtitle}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666' }}>
                {item.text}
              </Typography>
            </Box>
          ))}
          
          {index < sections.length - 1 && <Divider sx={{ my: 3 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default MealPrepIdeas;