import rbacCover from "../assets/blog/laravel-rbac.png";
import laravelCover from "../assets/blog/laravel-tests.png";

export const posts = [
  {
    id: "laravel-unit-testing",
    number: "002",
    title: "Just Because Your Code Works Doesn't Mean It's Correct.",
    category: "SOFTWARE TESTING · LARAVEL / PHP",
    excerpt:
      "Why writing unit tests changed the way I think about building reliable and maintainable software.",
    tags: ["Laravel", "PHPUnit", "Unit Testing", "AgriTimbang"],
    cover: laravelCover,
    coverAlt: "Laravel unit tests showing nine passing tests",
    blocks: [
      {
        type: "paragraph",
        text: "One thing I've been learning as I continue developing real-world applications is the importance of writing tests.",
      },
      {
        type: "paragraph",
        text: "As developers, we often focus on making features work. We write the logic, run the application, see the expected output, and move on.",
      },
      {
        type: "paragraph",
        text: "But here's the question: What happens when the input isn't what we expected?",
      },
      {
        type: "heading",
        text: "When Working Code Isn't Enough",
      },
      {
        type: "paragraph",
        text: "What if a required value is missing? What if someone enters a negative number? What if a future code change breaks something that was previously working?",
      },
      {
        type: "paragraph",
        text: "That's where testing becomes valuable.",
      },
      {
        type: "heading",
        text: "Testing a Livestock Weight Calculation Engine",
      },
      {
        type: "paragraph",
        text: "While working on a livestock weight calculation engine in Laravel for AgriTimbang, I started writing unit tests to verify not only whether the formulas produced the expected results, but also whether the system handled invalid inputs correctly.",
      },
      {
        type: "paragraph",
        text: "My tests covered different livestock datasets, including cattle, hogs, goats, and carabaos. I also included validation scenarios for missing measurements and nonpositive weight values.",
      },
      {
        type: "heading",
        text: "From Failing Tests to Passing Tests",
      },
      {
        type: "paragraph",
        text: "During testing, I encountered failing cases that helped identify areas needing attention. After reviewing the implementation and running the tests again, the result was nine tests passed with nine assertions.",
      },
      {
        type: "quote",
        text: "It's not just about proving that your code works. It's about finding the situations where it doesn't.",
      },
      {
        type: "heading",
        text: "What Testing Has Taught Me",
      },
      {
        type: "paragraph",
        text: "Nine passing tests don't guarantee a bug-free system, but they give me more confidence in the behavior I've actually tested.",
      },
      {
        type: "paragraph",
        text: "The more I build, the more I realize that good software development isn't just about writing code that runs.",
      },
      {
        type: "quote",
        text: "It's about writing code you can trust, maintain, and improve.",
      },
      {
        type: "paragraph",
        text: "Still learning, one test at a time.",
      },
    ],
  },

  {
    id: "laravel-rbac",
    number: "001",
    title:
      "Authentication vs. Authorization: What Laravel Taught Me About RBAC",
    category: "BACKEND ENGINEERING · LARAVEL / PHP",
    excerpt:
      "Moving beyond hardcoded role checks to permission-based access control—and learning why maintainability matters as systems grow.",
    tags: ["Laravel", "RBAC", "Eloquent", "Authorization"],
    cover: rbacCover,
    coverAlt: "Laravel Eloquent RBAC permission-check code",
    blocks: [
      {
        type: "paragraph",
        text: "One thing I've learned while working with Laravel is that authentication and authorization are two very different things.",
      },
      {
        type: "paragraph",
        text: "When I first started building systems, managing user access seemed straightforward. Just check whether someone is an admin or a regular user, right?",
      },
      {
        type: "paragraph",
        text: "But as I started working on more complex applications, I realized that approach doesn't always scale well.",
      },
      {
        type: "heading",
        text: "Authentication vs. Authorization",
      },
      {
        type: "paragraph",
        text: "Authentication answers the question: Who are you? Authorization answers: What are you allowed to do?",
      },
      {
        type: "paragraph",
        text: "Just because a user is authenticated doesn't mean they should have access to every feature in an application.",
      },
      {
        type: "heading",
        text: "Why I Started Appreciating RBAC",
      },
      {
        type: "paragraph",
        text: "What happens when multiple roles need access to the same feature? Or when users need different permissions depending on their responsibilities?",
      },
      {
        type: "paragraph",
        text: "Instead of hardcoding role checks throughout the application, I've been working on a more flexible approach where users are assigned roles, and those roles determine what actions they're allowed to perform.",
      },
      {
        type: "heading",
        text: "A Small Part of My Implementation",
      },
      {
        type: "code",
        language: "php",
        text: `public function hasPermission(string $permission): bool
{
    return $this->roles()
        ->where('scope', 'platform')
        ->whereHas('permissions', function ($query) use ($permission) {
            $query->where('name', $permission);
        })
        ->exists();
}`,
      },
      {
        type: "paragraph",
        text: "This function uses Laravel's Eloquent relationships to check whether a user has the requested permission through one of their platform-scoped roles.",
      },
      {
        type: "paragraph",
        text: "The exists() method returns a boolean without retrieving the matching records.",
      },
      {
        type: "heading",
        text: "What This Taught Me",
      },
      {
        type: "quote",
        text: "Writing code that works is one thing. Designing code that remains maintainable as the system grows is another.",
      },
      {
        type: "paragraph",
        text: "Still learning, still improving, and slowly understanding that software development isn't just about making features work. It's also about thinking ahead.",
      },
    ],
  },
];
