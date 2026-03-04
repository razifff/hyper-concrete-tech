CREATE TABLE `quoteSubmissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`customerEmail` varchar(320) NOT NULL,
	`customerPhone` varchar(20) NOT NULL,
	`companyName` varchar(255),
	`selectedPlant` varchar(100) NOT NULL,
	`concreteType` varchar(100) NOT NULL,
	`quantity` varchar(50) NOT NULL,
	`projectType` varchar(100) NOT NULL,
	`deliveryLocation` text NOT NULL,
	`preferredDeliveryDate` varchar(50),
	`additionalNotes` text,
	`status` enum('pending','reviewed','quoted','completed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quoteSubmissions_id` PRIMARY KEY(`id`)
);
