export default [
	{
		Root: import.meta.resolve("./"),
		Components: [
			"./src/atoms/Logo.tsx",
			"./src/organisms/MyDivinerHeader.tsx",
		],
	},
	{
		Root: 'https://deno.land/x/fathym_atomic@v0.0.130/',
		Components: [
			"./src/atoms/Action.tsx",
			"./src/atoms/forms/Input.tsx",
			"./src/atoms/forms/InputWrapper.tsx",
			"./src/atoms/forms/Select.tsx",
			"./src/atoms/forms/SlideToggle.tsx",
			"./src/molecules/ActionGroup.tsx",
			"./src/molecules/Display.tsx",
			"./src/molecules/LineItem.tsx",
			"./src/molecules/MenuButton.tsx",
			"./src/molecules/ResponsiveSet.tsx",
			"./src/molecules/Tabs.tsx",
			"./src/organisms/Features.tsx",
			"./src/organisms/Footer.tsx",
			"./src/organisms/Header.tsx",
			"./src/organisms/Hero.tsx",
			"./src/organisms/SignIn.tsx",
			"./src/organisms/SignUp.tsx",
			"./src/organisms/StepsFeatures.tsx",
			"./src/templates/BasicLayout.tsx",
		],
	},
	{
		Root: 'https://deno.land/x/fathym_atomic_chat@v0.0.29/',
		Components: [
			"./src/molecules/ChatBox.tsx",
			"./src/molecules/ChatInput.tsx",
			"./src/organisms/ChatHistory.tsx",
		],
	},
];