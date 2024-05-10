#include <stdio.h>
int main() {
    int arr[5]={1,2,3,4,5}, size = 5, choice, element, position;
    do {printf("\n1. Insert\n2. Update\n3. Delete\n4. Display\n5. Search\n0. Exit\nEnter your choice: ");
        scanf("%d", &choice);
        switch(choice) {
            case 0: break;
            case 1: // Insert
                if (size >=6) {
                    printf("Error: Array size exceeded.\n");
                    break;
                }
                printf("Enter the element and position: ");
                scanf("%d %d", &element, &position);
                // Shift elements to the right
                for (int i = size - 1; i >= position; i--) {
                    arr[i + 1] = arr[i];
                }
                // Insert element
                arr[position] = element;
                size++;
                break;
            case 2: // Update
                printf("Enter the position and new element: ");
                scanf("%d %d", &position, &element);
                if (position < 0 || position >= size) {
                    printf("Error: Invalid position.\n");
                    break;
                }
                arr[position] = element;
                break;
            case 3: // Delete
                printf("Enter the position to delete: ");
                scanf("%d", &position);
                if (position < 0 || position >= size) {
                    printf("Error: Invalid position.\n");
                    break;
                }
                // Shift elements to the left
                for (int i = position; i < size - 1; i++) {
                    arr[i] = arr[i + 1];
                }
                size--;
                break;
            case 4: // Display
                for (int i = 0; i < size; i++) {
                    printf("%d ", arr[i]);
                }
                printf("\n");
                break;
            case 5: // Search
                printf("Enter the element to search: ");
                scanf("%d", &element);
                for (int i = 0; i < size; i++) {
                    if (arr[i] == element) {
                        printf("%d found at position %d.\n", element, i);
                        goto found;
                    }
                }
                printf("%d not found in the array.\n", element);
                found:
                break;
            default:
                printf("Invalid choice.\n");
        }
    } while (choice != 0);
    printf("Exiting...\n");
    return 0;
}
