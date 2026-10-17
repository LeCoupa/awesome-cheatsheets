# *****************************************************************************
# SPRING BOOT CHEATSHEET
# *****************************************************************************


# 1. Use meaningful class and method names.
# 2. Follow Java naming conventions (camelCase for variables/methods, PascalCase for classes).
# 3. Document your REST controllers and service methods with @ApiOperation (Swagger).
# 4. Use @Component, @Service, @Repository, @Controller annotations appropriately.
# 5. Keep controllers thin - delegate business logic to services.
# 6. Use DTOs for API requests/responses to separate concerns.
# 7. Follow SOLID principles and dependency injection patterns.

# TIP: Use SonarLint or CheckStyle for code quality analysis.


# *****************************************************************************
# PROJECT STRUCTURE > BEST PRACTICES
# *****************************************************************************


# Recommended package structure:
# com.company.project
# ├── ProjectApplication.java (main class)
# ├── config/          # Configuration classes
# ├── controller/      # REST controllers
# ├── service/         # Business logic
# ├── repository/      # Data access layer
# ├── model/entity/    # JPA entities
# ├── model/dto/       # Data Transfer Objects
# ├── exception/       # Custom exceptions
# ├── util/           # Utility classes
# └── security/       # Security configuration


# *****************************************************************************
# ANNOTATIONS > ESSENTIAL SPRING BOOT ANNOTATIONS
# *****************************************************************************


@SpringBootApplication              # Main application class (combines @Configuration, @EnableAutoConfiguration, @ComponentScan)
@RestController                     # REST controller (combines @Controller + @ResponseBody)
@Controller                         # MVC controller
@Service                           # Service layer component
@Repository                        # Data access layer component
@Component                         # Generic Spring component
@Configuration                     # Configuration class
@Bean                             # Bean definition method
@Autowired                        # Dependency injection
@Value("${property}")             # Inject property value
@ConfigurationProperties          # Bind properties to POJO
@Profile("dev")                   # Profile-specific bean
@Conditional                      # Conditional bean creation
@EnableJpaRepositories           # Enable JPA repositories
@EnableWebSecurity               # Enable Spring Security
@EnableScheduling                # Enable task scheduling
@EnableAsync                     # Enable asynchronous processing


# *****************************************************************************
# REST API > CONTROLLER ANNOTATIONS
# *****************************************************************************


@RequestMapping("/api/v1")        # Base path for controller
@GetMapping("/users")             # HTTP GET mapping
@PostMapping("/users")            # HTTP POST mapping  
@PutMapping("/users/{id}")        # HTTP PUT mapping
@DeleteMapping("/users/{id}")     # HTTP DELETE mapping
@PatchMapping("/users/{id}")      # HTTP PATCH mapping
@PathVariable                     # Extract path variable
@RequestParam                     # Extract query parameter
@RequestBody                      # Extract request body
@ResponseStatus(HttpStatus.CREATED) # Set response status
@Valid                           # Enable validation
@CrossOrigin                     # Enable CORS


# *****************************************************************************
# JPA/HIBERNATE > ENTITY ANNOTATIONS
# *****************************************************************************


@Entity                          # JPA entity
@Table(name = "users")          # Specify table name
@Id                             # Primary key
@GeneratedValue(strategy = GenerationType.IDENTITY) # Auto-generated ID
@Column(name = "email", unique = true, nullable = false) # Column mapping
@OneToMany(mappedBy = "user", cascade = CascadeType.ALL) # One-to-many relationship
@ManyToOne(fetch = FetchType.LAZY) # Many-to-one relationship
@JoinColumn(name = "user_id")   # Foreign key column
@Temporal(TemporalType.TIMESTAMP) # Date/time mapping
@Enumerated(EnumType.STRING)    # Enum mapping
@Transient                      # Ignore field in persistence
@Version                        # Optimistic locking
@CreationTimestamp              # Auto-set creation time
@UpdateTimestamp                # Auto-set update time


# *****************************************************************************
# VALIDATION > BEAN VALIDATION ANNOTATIONS
# *****************************************************************************


@NotNull                        # Field cannot be null
@NotEmpty                       # String/Collection cannot be empty
@NotBlank                       # String cannot be blank
@Size(min = 2, max = 30)       # Size constraints
@Min(18)                        # Minimum value
@Max(120)                       # Maximum value
@Email                          # Email validation
@Pattern(regexp = "^[0-9]+$")   # Regex pattern
@Past                           # Date in the past
@Future                         # Date in the future
@Valid                          # Cascade validation


# *****************************************************************************
# SPRING DATA JPA > REPOSITORY METHODS
# *****************************************************************************


# Query method naming conventions:
findBy + PropertyName                    # Find by property
findByNameAndEmail(String name, String email) # Find by multiple properties
findByAgeGreaterThan(int age)           # Find by comparison
findByNameContaining(String name)       # Find by containing
findByNameStartingWith(String prefix)   # Find by starting with
findByNameEndingWith(String suffix)     # Find by ending with
findByActiveTrue()                      # Find by boolean true
findByCreatedDateBetween(Date start, Date end) # Find by date range

# Custom queries:
@Query("SELECT u FROM User u WHERE u.email = ?1")
@Query(value = "SELECT * FROM users WHERE active = true", nativeQuery = true)
@Modifying
@Query("UPDATE User u SET u.active = false WHERE u.id = ?1")


# *****************************************************************************
# CONFIGURATION > APPLICATION PROPERTIES
# *****************************************************************************


# Server configuration
server.port=8080
server.servlet.context-path=/api

# Database configuration (H2)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# Database configuration (PostgreSQL)
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=user
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

# JPA/Hibernate configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Logging configuration
logging.level.com.company.project=DEBUG
logging.level.org.springframework.web=DEBUG
logging.pattern.console=%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n

# Profile configuration
spring.profiles.active=dev

# Security configuration
spring.security.user.name=admin
spring.security.user.password=password

# Actuator configuration
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always


# *****************************************************************************
# SPRING BOOT CLI > USEFUL COMMANDS
# *****************************************************************************


# Project creation
spring init --build=maven --java-version=17 --dependencies=web,jpa,h2 my-project
spring init --build=gradle --dependencies=web,security,actuator my-project

# Run application
./mvnw spring-boot:run                    # Maven
./gradlew bootRun                         # Gradle

# Build application
./mvnw clean package                      # Maven
./gradlew build                          # Gradle

# Run tests
./mvnw test                              # Maven
./gradlew test                           # Gradle

# Create executable JAR
./mvnw clean package -DskipTests         # Maven
./gradlew bootJar                        # Gradle

# Run JAR file
java -jar target/my-project-1.0.0.jar
java -Dspring.profiles.active=prod -jar my-app.jar


# *****************************************************************************
# DOCKER > CONTAINERIZATION
# *****************************************************************************


# Dockerfile example:
FROM openjdk:17-jdk-slim
VOLUME /tmp
COPY target/my-app.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

# Docker commands:
docker build -t my-spring-app .
docker run -p 8080:8080 my-spring-app
docker-compose up                        # If using docker-compose.yml


# *****************************************************************************
# TESTING > COMMON TESTING ANNOTATIONS
# *****************************************************************************


@SpringBootTest                         # Integration test
@WebMvcTest                            # Test web layer only
@DataJpaTest                           # Test JPA repositories
@MockBean                              # Mock Spring bean
@TestPropertySource                    # Test-specific properties
@Sql                                   # Execute SQL scripts
@Transactional                         # Rollback after test
@DirtiesContext                        # Reload application context


# *****************************************************************************
# SECURITY > SPRING SECURITY BASICS
# *****************************************************************************


@EnableWebSecurity                     # Enable Spring Security
@EnableGlobalMethodSecurity(prePostEnabled = true) # Method-level security

# Security configuration example:
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2.jwt());
        return http.build();
    }
}


# *****************************************************************************
# BEST PRACTICES > PRODUCTION READY
# *****************************************************************************


# 1. Use profiles for different environments (dev, test, prod)
# 2. Externalize configuration using application.properties/yml
# 3. Implement proper error handling with @ControllerAdvice
# 4. Use DTOs to avoid exposing internal entities
# 5. Implement proper logging with SLF4J
# 6. Add health checks with Spring Boot Actuator
# 7. Secure your application with Spring Security
# 8. Use connection pooling for database connections
# 9. Implement caching where appropriate (@Cacheable)
# 10. Add API documentation with OpenAPI/Swagger
# 11. Use database migrations (Flyway/Liquibase)
# 12. Implement proper exception handling
# 13. Add monitoring and metrics collection
# 14. Use async processing for long-running tasks
# 15. Implement proper validation on all inputs


# *****************************************************************************
# COMMON DEPENDENCIES > POM.XML SNIPPETS
# *****************************************************************************


# Essential dependencies:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>


# *****************************************************************************
# DEPLOYMENT > PRODUCTION CHECKLIST
# *****************************************************************************


# 1. Set spring.profiles.active=prod
# 2. Configure proper database connection
# 3. Set up logging configuration
# 4. Enable security headers
# 5. Configure SSL/TLS
# 6. Set up monitoring and alerting
# 7. Configure load balancer
# 8. Set up database backups
# 9. Configure environment variables for sensitive data
# 10. Set up CI/CD pipeline
# 11. Configure health checks
# 12. Set up centralized logging
# 13. Configure caching strategy
# 14. Set up database connection pooling
# 15. Enable compression and static resource optimization


# *****************************************************************************
# TROUBLESHOOTING > COMMON ISSUES
# *****************************************************************************


# Port already in use:
# Change server.port in application.properties or kill process using port

# Bean creation errors:
# Check for circular dependencies, missing @Component annotations

# Database connection issues:
# Verify database URL, credentials, and driver configuration

# 404 errors:
# Check controller mappings, context path, and request URLs

# Validation not working:
# Add @Valid annotation and spring-boot-starter-validation dependency

# Auto-configuration not working:
# Check if @SpringBootApplication is in root package
