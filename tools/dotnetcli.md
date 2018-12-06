# DOTNET CLI TOOLS

## dotnet new

##### New Solution file

`dotnet new sln`

##### New Console app

`dotnet new console`

##### New Class library

`dotnet new classlib`

##### New ASP.NET Core MVC Web App

`dotnet new mvc`

##### New xUnit Test project

`dotnet new xunit`

##### Show the list of the available templates

`dotnet new -l`


## dotnet sln

##### List all projects in the solution

`dotnet sln list`

##### Add a C# project to a solution

`dotnet sln Winnovera.sln add Dir/Proj.csproj`

##### Remove a C# project from a solution

`dotnet sln Winnovera.sln remove Dir/Proj.csproj`

##### Add multiple C# projects to a solution using a globbing pattern

`dotnet sln Winnovera.sln add \*_/_.cs proj`



## dotnet add

##### Add NuGet package to a project

`dotnet add package <Nuget Package Name>`

##### Add multiple project references to the project in the current directory

`dotnet add reference lib1/lib1.csproj lib2/lib2.cs proj`

##### Add multiple project references using a globbing pattern on Linux/Unix

`dotnet add Dir/Prod.csproj reference \*_/_.csproj`



## dotnet build

##### Build a project and all of its dependencies

`dotnet build`

##### Build a project and its dependencies using the Release configuration

`dotnet build --configuration Release`

##### Build a project and its dependencies for a specific runtime (in this example,Debian 9)

`dotnet build --runtime debian9 -x64`



## dotnet run

##### Run a project in the current directory

`dotnet run`

##### Run a project in a specified directory

`dotnet run --project ./Dir/Proj/Proj.csproj`

##### Run a Compiled library (In this example, Winnovera.dll)

`dotnet Winnovera.dll`



## dotnet watch
File watcher for dotnet that restarts the specified application when changes in the source code are detected.

##### Execute the command in the directory that contains the project to be watched.

Usage: `dotnet watch [options][--] <args>...]`
<pre>
Options:
`-?|-h|--help Show help information
-q|--quiet Suppresses all output except warnings and errors
-v|--verbose Show verbose output`

Any .NET Core CLI command can be run with dotnet watch. For example:

 Command                             Command with watch
`dotnet run`                         `dotnet watch run`
`dotnet run -f netcoreapp2.1`        `dotnet watch run -f netcoreapp2.1`
`dotnet test`                        `dotnet watch test`
</pre>

## dotnet clean

Both intermediate (obj) and final output (bin) folders are cleaned

##### Clean the project output

`dotnet clean`

##### Clean a project that is built using a Release configuration

`dotnet clean --configuration Release`



## dotnet publish

The dotnet publish command's output is ready for deployment to a hosting system (for example, a server, PC, Mac, laptop) for execution.

##### Publish the project in the current directory

`dotnet publish`

##### Publish the application using the specified project file

`dotnet publish ~/Dir/Proj/Proj.csproj`



## dotnet ef

##### Add a new Entity Framework migration

`dotnet ef migrations add`

##### List available migrations

`dotnet ef migrations list`

##### Remove the last migration

`dotnet ef migrations remove`

##### Generate a SQL script from migrations

`dotnet ef migrations script`

##### Update the database to a specified migration

`dotnet ef database update`

##### Drop the database

`dotnet ef database drop`

##### List available DbContext types

`dotnet ef dbcontext list`

##### Get information about a DbContext type

`dotnet ef dbcontext info`

##### Scaffolds a DbContext and entity types for a database

`dotnet ef dbcontext scaffold`



## dotnet pack

##### Build the project and create Nuget Packages

`dotnet pack`

##### Pack the project in the current directory into the `nupkgs` folder and skip the build step

`dotnet pack --no-build --output nupkgs`

##### Set the package version to 2.1.3 with the PackageVersion MSBuild property

`dotnet pack /p:PackageVersion=2.1.3`



## dotnet nuget

##### Displays the path of all the local cache directories

`dotnet nuget locals -l all`

##### Push <Package>.nupkg to the default push source, specifying an API key

`dotnet nuget push <Package>.nupkg -k <API Key>`

##### Delete version 1.0 of a Nuget package, not prompting user for credentials or other input

`dotnet nuget delete <Package> 1.0 --non-interactive`



## dotnet remove

##### Remove a Nuget package from a project in the current directory

`dotnet remove package <Package>`

##### Remove a project reference from the current project

`dotnet remove reference lib/lib.csproj`

##### Remove multiple project references using a glob pattern on Unix/Linux

`dotnet remove Dir/Proj.csproj reference \*_/_.csproj`



## Other commands

##### Show more detailed documentation online for the command

`dotnet help`

##### Migrate a project

`dotnet migrate`

##### Provides access to a fully functional MSBuild

`dotnet msbuild`

##### Run the tests in the project in the current directory

`dotnet test`

##### List the project references for the project

`dotnet list reference`



## Dotnet CLI Global Tools

#### [Simple command-line HTTP server for .NET Core CLI](https://github.com/natemcmaster/dotnet-serve)
`dotnet tool install -g dotnet-serve`

#### [Find outdated NuGet packages and apply updates to them](https://github.com/NuKeeperDotNet/NuKeeper)
`dotnet tool install -g NuKeeper --version 0.5.0`

#### [Coverlet is a cross platform code coverage library for .NET Core, with support for line, branch and method coverage](https://github.com/tonerdo/coverlet)
`dotnet tool install -g coverlet.console`

#### [The SonarScanner for MSBuild is the recommended way to launch a SonarQube or SonarCloud analysis for projects/solutions using dotnet command as build tool](https://github.com/SonarSource/sonar-scanner-msbuild)
`dotnet tool install -g dotnet-sonarscanner`

#### [Search for Nuget packages using the .NET Core CLI](https://github.com/billpratt/dotnet-search)
`dotnet tool install -g dotnet-search`

#### [Code generation tool for creating controllers, views, and models in ASP.NET Core projects](https://github.com/aspnet/Scaffolding)
`dotnet tool install -g dotnet-aspnet-codegenerator --version 2.1.1`

#### [Run C# scripts from the .NET CLI](https://github.com/filipw/dotnet-script)
`dotnet tool install -g dotnet-script`